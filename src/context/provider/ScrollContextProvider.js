import { useRef } from "react";
import { createContext } from "react";

export const ScrollContext = createContext({});

export function ScrollContextProvider({ children }) {
  const services = useRef(null);
  const about = useRef(null);
  const reservations = useRef(null);
  const contact = useRef(null);
  const missionAndVision = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToSection,
        services,
        about,
        reservations,
        contact,
        missionAndVision,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
