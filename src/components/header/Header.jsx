import React, { useState } from "react";

import { useHeaderContainer } from "./headerContainer";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const { copyEmailToClipboard, showCopyMessage, isTextCopied } =
    useHeaderContainer();

  const handleNavBtn = () => {
    setNavActive(!navActive);
  };

  return (
    <header id="01">
      <div className="header-bg"></div>
      <nav>
        <ul className={`${navActive && "active"}`}>
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
              My Wor
            </a>
            k
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
        <span>Hi! I'm Maciej.</span>
        <h1>
          <span>Front End Developer</span>
        </h1>
        <div className="header_social">
          <ul>
            <li>
              <a href="https://www.facebook.com/maciej.rapacki/" target="blank">
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
                showCopyMessage();
                copyEmailToClipboard();
              }}
            >
              {isTextCopied && (
                <div className="header_social_email_msg">
                  mac.rapacki@gmail.com Copied!
                </div>
              )}
              <div>
                <i class="fas fa-envelope"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
