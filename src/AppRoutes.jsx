import { Suspense, lazy, useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import Aos from "aos";
import PageWrapper from "./components/route/PageWrapper";
import { useCustomRouter } from "./context/customRouter/CustomRouterContext";
import LoaderContext from "./context/LoaderContext";

const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Atlantiis = lazy(() => import("./pages/Atlantiis/Atlantiis"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));

const OtherProject = lazy(() => import("./pages/OtherProject/OtherProject"));

const AppRoutes = () => {
  const { customPathname } = useCustomRouter();
  const { mounted } = useContext(LoaderContext);

  useEffect(() => {
    if (mounted) {
      Aos.init({
        duration: 1000,
        easing: "ease-out-cubic",
        offset: 100,
      });
    }
  }, [mounted]);

  const AllRoutes = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/atlantis",
      component: <Atlantiis />,
    },
    {
      path: "/about-us",
      component: <AboutUs />,
    },
    {
      path: "/other-projects",
      component: <OtherProject />,
    },

    {
      path: "/media",
      component: <h1>Media Page</h1>,
    },

    {
      path: "/contact",
      component: <h1>Contact Page</h1>,
    },

    {
      path: "*",
      component: <h1>404 Page</h1>,
    },
  ];

  return (
    <div className="main-wrapper">
      <Suspense fallback={<div className="loader"></div>}>
        <Routes location={{ pathname: customPathname }}>
          <Route element={<Layout />}>
            {AllRoutes.map((page, index) => (
              <Route
                path={page.path}
                element={
                  <PageWrapper key={customPathname}>
                    {page.component}
                  </PageWrapper>
                }
                key={index}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
