import React, { useState } from "react";

export const useHeaderContainer = () => {
  const [isTextCopied, setIsTextCopied] = useState(false);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "mac.rapacki@gmail.com";
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = email;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  const showCopyMessage = () => {
    setIsTextCopied(true);
    setTimeout(() => {
      setIsTextCopied(false);
    }, 2000);
  };

  // const handleScrollEvent = () => {
  //   window.addEventListener("scroll", () => {
  //     setCurrentScrollPosition(window.scrollY);
  //   });
  // };

  const handleNavOnScroll = () => {
    setCurrentScrollPosition(window.scrollY);
    console.log(currentScrollPosition);
    // currentScrollPosition > 200 ? setHideNav(true) : setHideNav(false);
    // console.log(hideNav);
  };

  return {
    copyEmailToClipboard,
    showCopyMessage,
    isTextCopied,
    handleNavOnScroll,
    hideNav,
    currentScrollPosition,
  };
};
