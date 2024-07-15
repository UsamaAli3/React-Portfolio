import "./App.css";
import Navebar from "./pages/Navebar";
import { useSelector } from "react-redux";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import { Element } from "react-scroll";
import WhatIDo from "./pages/WhatIDo";

function App() {
  const color = useSelector((state) => state.color.color);
  console.log(color);
  return (
    <>
      <div className="bg-skin-color" data-theme={color}>
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
        {/* <Element name="resume" className="element">
          <AboutMe />
        </Element>
        <Element name="profile" className="element">
          <AboutMe />
        </Element>
        <Element name="client-speak" className="element">
          <AboutMe />
        </Element>
        <Element name="contect-me" className="element">
          <AboutMe />
        </Element> */}
      </div>
    </>
  );
}

export default App;
