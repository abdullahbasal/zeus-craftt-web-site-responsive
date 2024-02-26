import "./App.css";

import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Reservations from "./pages/reservations/Reservations";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import { ScrollContextProvider } from "./context/provider/ScrollContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ScrollContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </ScrollContextProvider>
  );
}

export default App;
