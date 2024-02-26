import "./About.css";

import { useTranslation } from "react-i18next";

const About = ({ forwardedRef }) => {
  const { t } = useTranslation();
  return (
    <div className="about-container" ref={forwardedRef}>
      <div className="title">{t("aboutTitle")}</div>
      <div className="category">{t("aboutCategory")}</div>
      <div className="description">
        {t("aboutDescription")}
        <br />
        {t("aboutDescriptionOne")}
        <br />
        {t("aboutDescriptionTwo")}
        <br />
        {t("aboutDescriptionThree")}
        <br />
        {t("aboutDescriptionFour")}
      </div>
      <div className="about-category col-12 ">
        <div className="row justify-content-center gap-20">
          <div className="col about-card">
            <div className="icon">⭐</div>
            <div className="card-title"> {t("aboutServiceCardTitle")}</div>
            <div className="card-description">
              {t("aboutServiceCardDescription")}
            </div>
          </div>
          <div className="col about-card">
            <div className="icon">👆🏻</div>
            <div className="card-title">
              {" "}
              {t("aboutProfessionalismCardTitle")}
            </div>
            <div className="card-description">
              {t("aboutProfessionalismCardDescription")}
            </div>
          </div>
          <div className="col about-card">
            <div className="icon">🔍</div>
            <div className="card-title"> {t("aboutOrganizationCardTitle")}</div>
            <div className="card-description">
              {t("aboutOrganizationCardDescription")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
