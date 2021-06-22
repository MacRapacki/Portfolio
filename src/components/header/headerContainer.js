import React  from "react";
import {  toast } from 'react-toastify';

export const useHeaderContainer = () => {
 

  const copyEmailToClipboard = () => {
    const email = "mac.rapacki@gmail.com";
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = email;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    toast.success('mac.rapacki@gmail.com Copied!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };


  return {
    copyEmailToClipboard,
    
  };
};
