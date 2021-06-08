import React, { useState } from "react";

export const useHeaderContainer = () => {
  const [isTextCopied, setIsTextCopied] = useState(false);

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

  return {
    copyEmailToClipboard,
    showCopyMessage,
    isTextCopied,
  };
};
