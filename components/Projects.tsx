import React from "react";
import { PinContainer } from "./ui/Pin";
import { projects } from "@/data/data";

const Projects = () => {
  return (
    <div id="projects">
      <div className="py-14 lg:py-16">
      <h1 className="heading text-center uppercase text-[20px] lg:text-[32px] relative mt-4">
      Delivering Innovative Solutions{"  "}
        <span className="text-purple"> Through Expert Development</span>
      </h1>
      <div className="overflow-x-auto  px-8">
        <div className="flex space-x-12">
          {projects.map((item) => (
            <div
              className="lg:min-h-[30.5rem] h-[28rem] flex items-center justify-center flex-shrink-0"
              key={item.id}
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-xl w-full h-full "
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-base lg:font-normal font-light text-sm line-clamp-4"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black-200 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
