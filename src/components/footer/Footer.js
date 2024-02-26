import { useContext } from "react";
import { ScrollContext } from "../../context/provider/ScrollContextProvider";
import "./Footer.css";
import Mail from "../../assets/icons/mail-icon.png";
import Instagram from "../../assets/icons/instagram-icon.png";
import whatsapp from "../../assets/icons/whatsapp-icon.png";
import X from "../../assets/icons/x-icon.png";
import Telephone from "../../assets/icons/telefon-icon.png";
import D2Certificate from "../../assets/images/D2.jpg";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const {
    scrollToSection,
    services,
    about,
    reservations,
    contact,
    missionAndVision,
  } = useContext(ScrollContext);
  return (
    <div className="footer">
      <div className="row gap-20">
        <div className="col">
          <div className="title">{t("categories").toLocaleUpperCase()}</div>

          <div
            className="footer-description"
            onClick={() => window.scrollTo(0, 0)}
          >
            {t("homePage")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(services)}
          >
            {t("services")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(about)}
          >
            {t("about")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(reservations)}
          >
            {t("reservations")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(contact)}
          >
            {t("contact")}
          </div>
        </div>
        <div className="col">
          <div className="title"> {t("services").toLocaleUpperCase()}</div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(services)}
          >
            {t("tourVehicles")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(services)}
          >
            {t("groupTravels")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(services)}
          >
            {t("schoolTravels")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(services)}
          >
            {t("agencyTours")}
          </div>
          <div
            className="footer-description"
            onClick={() => scrollToSection(missionAndVision)}
          >
            {t("mission")} & {t("vision")}
          </div>
        </div>
        <div className="col ">
          <div className="title">{t("socialMedia").toLocaleUpperCase()}</div>
          <div className="social-media">
            <div className="footer-icons">
              <div className="social-footer-description">
                <a href="mailto:info@zeuscraftt.com">
                  <img src={Mail} alt="Mail" />
                </a>
              </div>
              <div className="social-footer-description">
                <a href="https://instagram.com/zeus.craftt_" target="_blank">
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
              <div className="social-footer-description">
                <a href="https://twitter.com/zeuscraftt1" target="_blank">
                  <img src={X} alt="X" />
                </a>
              </div>
              <div className="social-footer-description">
                <a href="tel:5398688183">
                  <img src={Telephone} alt="Telephone" />
                </a>
              </div>
              <div className="social-footer-description">
                <a href="https://api.whatsapp.com/send?phone=5398688183">
                  <img src={whatsapp} alt="p" />
                </a>
              </div>
            </div>
          </div>
          <div className="d2-certificate">
            <img src={D2Certificate} alt="D2Certificate" />
          </div>
        </div>
      </div>
    </div>
  );
}
