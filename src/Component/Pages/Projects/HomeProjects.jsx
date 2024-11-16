import React from "react";
import Project from "./Project";
import ServicesBanner from "../Services/ServicesBanner";

const HomeProjects = () => {
  return (
    <div className="mt-10">
      <ServicesBanner title="This is our Latest Work" />
      <Project />
    </div>
  );
};

export default HomeProjects;
