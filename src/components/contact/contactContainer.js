import emailjs from "emailjs-com";

export const useContactContainer = () => {
  const sendEmail = (formValues) => {
    emailjs
      .send(
        `${process.env.REACT_APP_EMAILJS_SERVICEID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`,
        formValues,
        `${process.env.REACT_APP_EMAILJS_USERID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return { sendEmail };
};
