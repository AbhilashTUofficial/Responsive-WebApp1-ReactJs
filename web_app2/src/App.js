import React, { useEffect, useState } from "react";
import "./scss/index.scss";
import LayoutWrapper from "./components/LayoutWrapper.tsx";
import NavBar from "./components/NavBar.tsx";
import Landing from "./components/Landing.tsx";
import About from "./components/About.tsx";

const App = () => {
  return (
    <div className="app-container">

      <LayoutWrapper>
      <NavBar />
      <Landing />
      <About />
      </LayoutWrapper>
    </div>
  );
};

export default App;
