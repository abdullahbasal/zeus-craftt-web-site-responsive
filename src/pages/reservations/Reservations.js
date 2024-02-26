import "./Reservations.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Reservations = ({ forwardedRef }) => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7yakpa6",
        "template_1ite06i",
        form.current,
        "7O3GCuJ2Blvt-mllL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="reservations-container" ref={forwardedRef}>
      <div className="title">{t("reservationTitle")}</div>
      <div className="category">{t("reservationCategory")}</div>
      <div className="description">{t("reservationDescription")}</div>
      <div className="reservations-bottom-container">
        <div className="row w-100">
          <div className="col reservations">
            <form ref={form} onSubmit={sendEmail}>
              <label>{t("fullName")}</label>
              <input type="text" name="name" required />
              <label>{t("subject")}</label>
              <input type="text" name="subject" required />
              <label>{t("telephone")}</label>
              <input type="tel" name="telephone" required />
              <label>{t("email")}</label>
              <input type="email" name="email" required />
              <label>{t("message")}</label>
              <textarea name="message" />
              <input type="submit" value={t("send")} required />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
