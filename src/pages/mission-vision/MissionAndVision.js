import "./MissionAndVision.css";
import React from "react";
import Vision from "../../assets/images/vision.png";
import Mission from "../../assets/images/mission.png";
import { useTranslation } from "react-i18next";

const MissionAndVision = ({ forwardedRef }) => {
  const { t } = useTranslation();
  return (
    <div className="mission-vision-container" ref={forwardedRef}>
      <div className="title">{t("missionAndVisionTitle")}</div>
      <div className="category">{t("missionAndVisionCategory")}</div>
      <div className="description">
        <div className="col mission-vision-info">
          <img src={Mission} alt="Mission" style={{ maxWidth: 150 }} />
          <h5>{t("mission")}</h5>
          {t("missionDescription")}
        </div>
      </div>
      <div className="description">
        <div className="col mission-vision-info">
          <img src={Vision} alt="Vision" style={{ maxWidth: 200 }} />
          <h5>{t("vision")}</h5>
          {t("visionDescription")}
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
