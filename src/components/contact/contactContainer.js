import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const useContactContainer = () => {
  const sendEmail = async (formValues) => {
    await emailjs
      .send(
        `${process.env.REACT_APP_EMAILJS_SERVICEID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`,
        formValues,
        `${process.env.REACT_APP_EMAILJS_USERID}`
      )
      .then(
        (result) => {
          toast.success("Thank You for Your message. I will contact with You soon.");
        },
        (error) => {
          toast.error("Something went wrong. Try again later.");
        }
      );
  };

  return { sendEmail };
};
