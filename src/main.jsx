import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import WhatIDo from "./pages/WhatIDo.jsx";
import Resume from "./pages/Resume.jsx";
import ClientSpeak from "./pages/ClientSpeak.jsx";
import Profile from "./pages/Profile.jsx";
import ContectMe from "./pages/ContectMe.jsx";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-me" Component={<AboutMe />} />
          <Route path="/what-i-do" element={<WhatIDo />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/client-speak" element={<ClientSpeak />} />
          <Route path="/contect-me" element={<ContectMe />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
