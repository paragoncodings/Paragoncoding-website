import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import NavBar from "./Component/Navbar/NavBar";

import Home from "./Component/Pages/Home";

import TeamMemberDetail from "./Component/Pages/Team/TeamMemberDetail";
import MainService from "./Component/Pages/Services/MainService";
import About from "./Component/Pages/About/About";
// import Project from "./Component/Pages/Projects/Project";
import AllTeamMember from "./Component/Pages/Team/AllTeamMember";
import AllProjects from "./Component/Pages/Projects/AllProjects";
import Scroll from "./Component/Pages/Scroll/Scroll";
import WhatsAppButton from "./Component/Pages/Home/WhatsAppButton";
function App() {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Scroll/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/services" element={<MainService/>} />
          <Route path="/team" element={< AllTeamMember/>} />
          <Route path="/teamdisplay/:id" element={<TeamMemberDetail/>} />
        </Routes>
        <WhatsAppButton/>
      </Router>

      <ScrollToTop
        smooth
        component={<FaArrowUp />}
        style={{
          backgroundColor: "#37383C",
          color: "#73FAF9",
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          border: "2px solid #7CFC0A",
          transition: "transform 0.3s ease",
        }}
        className="hover:scale-110"
      />
    </Fragment>
  );
}

export default App;
