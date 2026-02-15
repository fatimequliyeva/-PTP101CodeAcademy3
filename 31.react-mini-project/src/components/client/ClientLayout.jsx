import React, { useEffect, useMemo } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";

const ClientLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const pageTransition = useMemo(() => {
    const page = location.pathname === "/" ? "home" : location.pathname.split("/")[1] || "default";
    const base = {
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    };

    if (page === "home") {
      return {
        ...base,
        initial: { opacity: 0, y: 14, scale: 0.99 },
        exit: { opacity: 0, y: -10, scale: 0.995 }
      };
    }
    if (page === "shop") {
      return {
        ...base,
        initial: { opacity: 0, x: 26 },
        exit: { opacity: 0, x: -26 }
      };
    }
    if (page === "about") {
      return {
        ...base,
        initial: { opacity: 0, y: 26 },
        exit: { opacity: 0, y: -26 }
      };
    }
    if (page === "blog") {
      return {
        ...base,
        initial: { opacity: 0, x: -26 },
        exit: { opacity: 0, x: 26 }
      };
    }
    if (page === "cart" || page === "wishlist") {
      return {
        ...base,
        initial: { opacity: 0, scale: 0.985 },
        exit: { opacity: 0, scale: 0.99 }
      };
    }
    return { ...base, initial: { opacity: 0 } };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Navbar />
      <main style={{ position: "relative", overflowX: "hidden" }}>
        <AnimatePresence mode="wait" initial={false}>
          <Motion.div
            key={location.pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
            style={{ willChange: "transform, opacity" }}
          >
            <Outlet />
          </Motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
