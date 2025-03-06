import React from "react";
import { GlobeDemo } from "./ui/SoapGlobe";

const Footer = () => {
  return (
    <section
      className="flex flex-col lg:min-h-screen"
    >
      <div>
        <GlobeDemo />
      </div>
    </section>
  );
};

export default Footer;
