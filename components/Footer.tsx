import React from "react";
import { GlobeDemo } from "./ui/SoapGlobe";

const Footer = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col lg:min-h-screen"
    >
      <div>
        <GlobeDemo />
      </div>
    </section>
  );
};

export default Footer;
