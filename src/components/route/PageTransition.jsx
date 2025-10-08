import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import imagesLoaded from "imagesloaded";
import { useLenis } from "../../context/Lenis/LenisContext";
import { useLoader } from "../../context/Loader/LoaderContext";
import useLinkClick from "../../hook/useLinkClick";
import { gsap } from "../../gsapInit";
import { useLocation } from "react-router";
import { useCustomRouter } from "../../context/customRouter/CustomRouterContext";

const animateLogo = {
  initial: { opacity: 0 },
  enter: { opacity: 1, duration: 1.5, ease: "power2.out" },
  exit: { opacity: 0, duration: 0.8, ease: "power2.in" },
};

const animateLoaderTitle = {
  initial: { y: 50, opacity: 0 },
  enter: { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
  exit: { y: -150, opacity: 0, duration: 0.8, ease: "power4.in" },
};

const animatePanel = {
  initial: { scaleY: 0, transformOrigin: "bottom" },
  enter: {
    scaleY: 1,
    transformOrigin: "bottom",
    duration: 1.1,
    ease: "power4.inOut",
  },
  exit: {
    scaleY: 0,
    transformOrigin: "top",
    duration: 1,
    ease: "power4.inOut",
  },
};

const animateOverlay = {
  initial: { opacity: 0, display: "block" },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageTransition = ({ title }) => {
  const { isLoading, setMounted, pageComponentReady } = useLoader();
  const { linkClicked, routingPathname, resetLinkClick } = useLinkClick();
  const { setRoute } = useCustomRouter();
  const { pathname } = useLocation();
  const lenis = useLenis();

  const isFirstLoading = useRef(true);
  const containerRef = useRef(null);
  const loaderLogoRef = useRef(null);
  const loaderPanelRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);
  const onLoadTimelineRef = useRef(null);
  const routeTimelineRef = useRef(null);
  const [tlPaused, setTlPaused] = useState(false);
  const [routeTimelinePaused, setRouteTimelinePaused] = useState(false);

  const resetScroll = useCallback(() => {
    if (lenis?.scrollTo) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [lenis]);

  const setInitialStyles = () => {
    gsap.set(containerRef.current, { display: "flex" });
    gsap.set(loaderPanelRef.current, { ...animatePanel.initial });
    gsap.set(loaderLogoRef.current, { ...animateLogo.initial });
    gsap.set(titleRef.current, { ...animateLoaderTitle.initial });
    gsap.set(overlayRef.current, { ...animateOverlay.initial });
  };

  // 🔹 PAGE RELOAD (Panel stays at top and exits bottom → top)
  useLayoutEffect(() => {
    if (!isFirstLoading.current) return;

    const overlay = overlayRef.current;
    const loaderTitle = titleRef.current;
    const panel = loaderPanelRef.current;

    if (!overlay || !loaderTitle || !panel) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    onLoadTimelineRef.current = tl;

    const ctx = gsap.context(() => {
      // ✅ Panel visible from TOP by default
      gsap.set(panel, { scaleY: 1, transformOrigin: "top" });
      gsap.set(overlay, { ...animateOverlay.initial });
      gsap.set(loaderTitle, { ...animateLoaderTitle.initial });

      tl.to(overlay, animateOverlay.enter, 0)
        // Wait till images load
        .addPause("waitTillLoading")
        .call(() => setTlPaused(true))
        // Title animation
        .to(loaderTitle, animateLoaderTitle.enter)
        .to(loaderTitle, animateLoaderTitle.exit, "+=0.5")
        // ✅ Exit: panel goes bottom → top
        .to(
          panel,
          {
            scaleY: 0,
            transformOrigin: "top", // 🔥 key fix
            duration: 1,
            ease: "power4.inOut",
          },
          "-=0.2"
        )
        .to(overlay, animateOverlay.exit, "<")
        .call(() => {
          setMounted(true);
          isFirstLoading.current = false;
        });
    }, panel);

    return () => ctx.revert();
  }, [setMounted]);

  // 🔹 NAVIGATION (Logo → hide → Title → hide)
  useLayoutEffect(() => {
    if (isFirstLoading.current || !linkClicked) return;

    const overlay = overlayRef.current;
    const logo = loaderLogoRef.current;
    const loaderTitle = titleRef.current;
    const panel = loaderPanelRef.current;

    if (!overlay || !logo || !loaderTitle || !panel) return;

    setInitialStyles();

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => lenis?.resize(),
    });

    routeTimelineRef.current = tl;

    const ctx = gsap.context(() => {
      // ✅ Navigation behaves normally
      tl.to(overlay, animateOverlay.enter, 0)
        .to(panel, animatePanel.enter, 0)
        .to(logo, animateLogo.enter)
        .to(logo, animateLogo.exit)
        .to(loaderTitle, animateLoaderTitle.enter)
        .call(() => routingPathname && setRoute(routingPathname))
        .addPause("wait")
        .call(() => setRouteTimelinePaused(true))
        .call(resetScroll)
        .to(loaderTitle, animateLoaderTitle.exit)
        // Exit top → bottom (as before)
        .to(panel, animatePanel.exit, "-=0.4")
        .to(overlay, animateOverlay.exit, "<")
        .call(() => setMounted(true), [], "-=0.3");
    }, panel);

    return () => ctx.revert();
  }, [linkClicked, routingPathname, setMounted, lenis, setRoute, resetScroll]);

  // ✅ Handle pause/resume for reload animation
  useEffect(() => {
    if (!isLoading && tlPaused && onLoadTimelineRef.current) {
      imagesLoaded(document.body, () => {
        onLoadTimelineRef.current.play("waitTillLoading");
        setTlPaused(false);
      });
    }
  }, [isLoading, tlPaused]);

  // ✅ Handle navigation timeline resume
  useEffect(() => {
    if (routeTimelinePaused && pageComponentReady && routeTimelineRef.current) {
      imagesLoaded(document.body, () => {
        routeTimelineRef.current.play("wait");
        setRouteTimelinePaused(false);
      });
    }
  }, [pageComponentReady, routeTimelinePaused]);

  useEffect(() => {
    if (!routeTimelineRef.current) return;
    routeTimelineRef.current.eventCallback("onComplete", () =>
      resetLinkClick()
    );
  }, [resetLinkClick]);

  useEffect(() => {
    if (isFirstLoading.current || linkClicked) return;
    setRoute(pathname);
    const raf = requestAnimationFrame(() => {
      resetScroll();
      setMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, setRoute, resetScroll, setMounted, linkClicked]);

  return (
    <>
      <div className="page-loader-overlay" ref={overlayRef}></div>
      <div className="page-loader-container" ref={containerRef}>
        <div className="page-loader-panel" ref={loaderPanelRef}></div>

        {/* Logo */}
        <div className="loader" ref={loaderLogoRef}>
          <img src="/images/griffin-icon.png" alt="Logo" />
        </div>

        {/* Title */}
        <div className="loader-title">
          <span ref={titleRef}>{title || "Loading..."}</span>
        </div>
      </div>
    </>
  );
};

export default PageTransition;
