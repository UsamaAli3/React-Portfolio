import "./App.css";
import Navebar from "./pages/Navebar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import { Element } from "react-scroll";
import WhatIDo from "./pages/WhatIDo";
import Resume from "./pages/Resume";
import Profile from "./pages/Profile";
import ClientSpeak from "./pages/ClientSpeak";
import ContectMe from "./pages/ContectMe";
import Footer from "./pages/Footer";
import { useSelector } from "react-redux";

function App() {
  const color = useSelector((state) => state.color.color);

  return (
    <>
      <div
        className=" w-full selection:bg-skin-color selection:text-white"
        data-theme={color}
      >
        <Navebar />
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="about-me" className="element">
          <AboutMe />
        </Element>
        <Element name="what-i-do" className="element">
          <WhatIDo />
        </Element>
        <Element name="resume" className="element">
          <Resume />
        </Element>
        <Element name="profile" className="element">
          <Profile />
        </Element>
        <Element name="client-speak" className="element">
          <ClientSpeak />
        </Element>
        <Element name="contect-me" className="element">
          <ContectMe />
        </Element>
        <Footer />
      </div>
    </>
  );
}

export default App;
