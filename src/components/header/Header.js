import "./Header.css";

import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ScrollContext } from "../../context/provider/ScrollContextProvider";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import EnFlag from "../../assets/icons/en-flag.png";
import TrFlag from "../../assets/icons/tr-flag.png";

export default function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { scrollToSection, services, about, reservations, contact } =
    useContext(ScrollContext);
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" />
          <div>ZEUSCRAFT</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav margin-auto mb-2 mb-lg-0">
            <>
              <li className="nav-item" onClick={() => navigate("/")}>
                {t("homePage")}
              </li>
              <li
                className="nav-item"
                onClick={() => scrollToSection(services)}
              >
                {t("services")}
              </li>
              <li className="nav-item" onClick={() => scrollToSection(about)}>
                {t("about")}
              </li>
              <li
                className="nav-item"
                onClick={() => scrollToSection(reservations)}
              >
                {t("reservations")}
              </li>
              <li className="nav-item" onClick={() => scrollToSection(contact)}>
                {t("contact")}
              </li>
              <li>
                <div className="dropdown">
                  {t("languageSelect")} :
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {i18next.language === "en" ? (
                      <img src={EnFlag} alt="en" />
                    ) : (
                      <img src={TrFlag} alt="tr" />
                    )}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage("en")}
                    >
                      <img src={EnFlag} alt="en" />
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage("tr")}
                    >
                      <img src={TrFlag} alt="tr" />
                    </button>
                  </div>
                </div>
              </li>
            </>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// <div className="zeuscraft-navbar">
//   <div className="logo-container" onClick={() => navigate("/")}>
//     <img src={Logo} className="navbar-logo" alt="logo" />
//     <div>ZEUSCRAFT</div>
//   </div>
//   <div className="right-side">
//     <div className="col" onClick={() => navigate("/")}>
//       Anasayfa
//     </div>
//     <div className="col" onClick={() => scrollToSection(services)}>
//       Hizmetlerimiz
//     </div>
//     <div className="col" onClick={() => scrollToSection(about)}>
//       Hakkımızda
//     </div>
//     <div className="col" onClick={() => scrollToSection(reservations)}>
//       Rezervasyonlar
//     </div>
//     <div className="col" onClick={() => scrollToSection(contact)}>
//       İletişim
//     </div>
//   </div>
// </div>
