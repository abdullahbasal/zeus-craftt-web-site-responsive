import React, { useContext } from "react";
import Services from "../services/Services";
import About from "../about/About";
import Reservations from "../reservations/Reservations";
import Contact from "../contact/Contact";
import { ScrollContext } from "../../context/provider/ScrollContextProvider";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import MissionAndVision from "../mission-vision/MissionAndVision";

const Home = () => {
  const { services, about, reservations, contact, missionAndVision } =
    useContext(ScrollContext);
  return (
    <>
      <CarouselComponent />
      <Services forwardedRef={services} />
      <About forwardedRef={about} />
      <MissionAndVision forwardedRef={missionAndVision} />
      <Reservations forwardedRef={reservations} />
      <Contact forwardedRef={contact} />
    </>
  );
};

export default Home;
