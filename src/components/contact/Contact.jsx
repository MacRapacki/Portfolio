import React from "react";

import ContactForm from "./ContactForm";
import { useHeaderContainer } from "../header/headerContainer";

const Contact = () => {
  const { copyEmailToClipboard, showCopyMessage, isTextCopied } =
    useHeaderContainer();

  return (
    <section className="contact" id="05">
      <h2>Contact</h2>
      <ContactForm />
      <div className="contact_social">
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
    </section>
  );
};

export default Contact;
