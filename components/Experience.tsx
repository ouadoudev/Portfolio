import React from "react";

import { companies, workExperience } from "@/data/data";
import { Button } from "./ui/MovingBorders";
import { LampContainer } from "./ui/lamp";
import { InfiniteMovingIcons } from "./ui/infinite-moving-icons";

const Experience = () => {
  return (
    <div className="py-4 lg:py-0">
      <LampContainer className="pb-4 pt-36 lg:py-44 ">
    <h1 className="heading text-center uppercase text-[20px] lg:text-[32px] relative mt-5 lg:mt-4 ">
    A Glimpse into My{" "}
      <span className="text-purple"> Professional Background</span>
    </h1>
 
    {companies.length > 4 ? (
  <InfiniteMovingIcons
    items={companies.map((company) => ({
      icon: company.nameImg,
    }))}
    direction="left"
    speed="fast"
    pauseOnHover={false}
     className="w-32 lg:w-96"
  />
) : (
  <div className="flex flex-wrap items-center justify-center gap-4 relative">
    {companies.map((company) => (
      <React.Fragment key={company.id}>
        <div className="flex max-w-32 gap-2">
          <img
            src={company.nameImg}
            alt={company.name}
            className="w-32 lg:w-full"
          />
        </div>
      </React.Fragment>
    ))}
  </div>
)}

      <div className="w-full mt-1 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-center text-xl  font-bold">
                  {card.title}
                </h1>
                <span>{card.company}</span>
                <p className="text-center text-white-100 mt-3 font-semibold">
                  {card.description}
                </p>
                <span>{card.duration}</span>
              </div>
            </div>
          </Button>
        ))}
      </div>
      </LampContainer>
    </div>
  );
};

export default Experience;
