import "./Services.css";
import TrTourVehicles from "../../assets/images/tr-tour-1.png";
import TrGroupTravels from "../../assets/images/tr-tour-2.png";
import TrSchoolTravels from "../../assets/images/tr-tour-3.png";
import TrAgencyTours from "../../assets/images/tr-tour-4.png";
import EnTourVehicles from "../../assets/images/en-tour-1.png";
import EnGroupTravels from "../../assets/images/en-tour-2.png";
import EnSchoolTravels from "../../assets/images/en-tour-3.png";
import EnAgencyTours from "../../assets/images/en-tour-4.png";
import { useTranslation } from "react-i18next";

const Services = ({ forwardedRef }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="services-container" ref={forwardedRef}>
      <div className="title">{t("servicesTitle")}</div>
      <div className="category">{t("servicesCategory")}</div>
      <div className="description">{t("servicesDescription")}</div>
      <div className="services-image-category">
        <div className="row mb-20">
          <div className="col">
            {i18n.language === "tr" ? (
              <img src={TrTourVehicles} alt="Tur Taşımacılığı" />
            ) : (
              <img src={EnTourVehicles} alt="Tur Taşımacılığı" />
            )}
          </div>
          <div className="col">
            {i18n.language === "tr" ? (
              <img src={TrGroupTravels} alt="Grup Seyahatleri" />
            ) : (
              <img src={EnGroupTravels} alt="Grup Seyahatleri" />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {i18n.language === "tr" ? (
              <img src={TrSchoolTravels} alt="Okul Seyahatleri" />
            ) : (
              <img src={EnSchoolTravels} alt="Okul Seyahatleri" />
            )}
          </div>
          <div className="col">
            {i18n.language === "tr" ? (
              <img src={TrAgencyTours} alt="Acenta Turları" />
            ) : (
              <img src={EnAgencyTours} alt="Acenta Turları" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
