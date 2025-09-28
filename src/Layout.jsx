import React, { useEffect, useRef } from "react";
import { headerConfig } from "./lib/routeConfig";

import { Outlet, useLocation } from "react-router";

import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  const mainRef = useRef();

  const selectedRoutes = headerConfig.nonTransparentRoutes;
  const isHeaderNotTransparent = selectedRoutes.includes(pathname);

  useEffect(() => {
    const header = document.querySelector("header");
    const main = mainRef.current;

    if (!header || !main) return;

    if (isHeaderNotTransparent) {
      main.style.marginTop = `${header.offsetHeight}px`;
    } else {
      main.style.marginTop = "";
    }
  }, [isHeaderNotTransparent, pathname]);

  return (
    <>
      <Header isTransparent={!isHeaderNotTransparent} />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
