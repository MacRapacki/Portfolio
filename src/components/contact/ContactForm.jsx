import React from "react";

import { Formik, Form } from "formik";
import { formikValidationSchema } from "./validationSchema";
import { FORMIK_HELPER } from "./constans";

import { useContactContainer } from "./contactContainer";

import ErrorMessage from "./ErrorMessage";

const ContactForm = () => {
  const { sendEmail } = useContactContainer();
  return (
    <Formik
      initialValues={{
        [FORMIK_HELPER.NAME]: "",
        [FORMIK_HELPER.EMAIL]: "",
        [FORMIK_HELPER.MESSAGE]: "",
      }}
      validationSchema={formikValidationSchema}
      validateOnChange={true}
      onSubmit={(values, { resetForm }) => {
        sendEmail(values);
        resetForm({});
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isValid }) => (
        <Form onSubmit={handleSubmit} className="contact_form">
          {" "}
          <label htmlFor="name">
            <span>Name</span>
            <input
              id="name"
              type="text"
              onChange={handleChange}
              value={values[FORMIK_HELPER.NAME]}
            />
            <ErrorMessage message={errors[FORMIK_HELPER.NAME]} />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input
              id="email"
              type="email"
              onChange={handleChange}
              value={values[FORMIK_HELPER.EMAIL]}
            />
            {errors[FORMIK_HELPER.EMAIL] && (
              <ErrorMessage message={errors[FORMIK_HELPER.EMAIL]} />
            )}
          </label>
          <label htmlFor="message">
            <span>Message</span>
            <textarea
              id="message"
              type="text"
              onChange={handleChange}
              value={values[FORMIK_HELPER.MESSAGE]}
            />
            <ErrorMessage message={errors[FORMIK_HELPER.MESSAGE]} />
          </label>
          <button type="submit" disabled={!isValid} className="submit_button">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
