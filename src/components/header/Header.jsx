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
    <header>
      <div className="header-bg"></div>
      <nav>
        <div className="header_line"></div>
        <ul className={`${navActive && "active"}`}>
          <li>Home</li>
          <li>About</li>
          <li>Key Skills</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
        <button type="button" className="header_btn" onClick={handleNavBtn}>
          <i class="fas fa-bars"></i>
        </button>
      </nav>
      <div className="header_text-container">
        <span>Hi! I'm Maciej.</span>
        <h1>Front End Developer</h1>
        <div className="header_social">
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
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
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
