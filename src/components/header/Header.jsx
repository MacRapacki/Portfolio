import React, { useEffect, useState, useRef } from "react";

import { useHeaderContainer } from "./headerContainer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const navRef = useRef(null);

  const { copyEmailToClipboard } = useHeaderContainer();

  const handleNavBtn = () => {
    setNavActive(!navActive);
  };

  let prevScrollPosition = 0;

  const handleNavOnScroll = () => {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition <= 400) {
      setHideNav(false);
      prevScrollPosition = currentScrollPosition;
    } else {
      if (prevScrollPosition < currentScrollPosition) {
        setHideNav(true);
        prevScrollPosition = currentScrollPosition;
      } else {
        setHideNav(false);
        prevScrollPosition = currentScrollPosition;
      }
    }
  };

  const handleOpenedNav = (event) => {
    console.log(navActive);
    if (!navRef.current.contains(event.target)) {
      setNavActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavOnScroll);
    return () => window.removeEventListener("scroll", handleNavOnScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOpenedNav);
    return () => window.removeEventListener("click", handleOpenedNav);
  }, []);

  return (
    <header id="01">
      <div className="header-bg"></div>
      <nav className={!hideNav && "active"} ref={navRef}>
        <ul className={navActive && "active"}>
          <li>
            <a href="#01" onClick={handleNavBtn}>
              Home
            </a>
          </li>
          <li>
            <a href="#02" onClick={handleNavBtn}>
              About
            </a>
          </li>
          <li>
            <a href="#03" onClick={handleNavBtn}>
              Key Skills
            </a>
          </li>
          <li>
            <a href="#04" onClick={handleNavBtn}>
              My Work
            </a>
          </li>
          <li>
            <a href="#05" onClick={handleNavBtn}>
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="header_btn"
          onClick={handleNavBtn}
          aria-label={navActive ? "i am open" : "i am closed "}
          aria-expanded={navActive}
        >
          <i class="fas fa-bars"></i>
        </button>
      </nav>
      <div className="header_text-container">
        <Fade delay={250}>
          {" "}
          <span>Hi! I'm Maciej.</span>{" "}
        </Fade>
        <h1>
          <Fade delay={600}>
            <span>Front End Developer</span>
          </Fade>
        </h1>
        <div className="header_social">
          <Fade top cascade delay={1000}>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/maciej.rapacki/"
                  target="blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/maciej-rapacki-30b653142/"
                  target="blank"
                >
                  {" "}
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/MacRapacki" target="blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li
                onClick={() => {
                  copyEmailToClipboard();
                }}
              >
                <div>
                  <i class="fas fa-envelope"></i>
                </div>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
