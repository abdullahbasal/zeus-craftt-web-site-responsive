import "./Contact.css";

import Mail from "../../assets/icons/mail.png";
import Telephone from "../../assets/icons/telephone.png";
import Address from "../../assets/icons/address.png";
import { useTranslation } from "react-i18next";

const Contact = ({ forwardedRef }) => {
  const { t } = useTranslation();
  return (
    <div className="contact-container" ref={forwardedRef}>
      <div className="title">{t("contactTitle")}</div>
      <div className="category">{t("contactCategory")}</div>
      <div className="description">{t("contactDescription")}</div>
      <div className="contact-category w-100">
        <div className="row concatact-row">
          <div className="col">
            <div>
              <img src={Address} alt="address" />
            </div>
            <div className="title">{t("address")}</div>
            <div>Hatay / Antakya</div>
          </div>
          <div className="col">
            <div>
              <img src={Mail} alt="mail" />
            </div>
            <div className="title">{t("email")}</div>
            <a href="mailto:info@zeuscraftt.com" target="_blank">
              info@zeuscraftt.com
            </a>
          </div>
          <div className="col">
            <div>
              <img src={Telephone} alt="telephone" />
            </div>
            <div className="title">{t("telephone")}</div>
            <a href="tel:5398688183">+90 539 868 81 83</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
