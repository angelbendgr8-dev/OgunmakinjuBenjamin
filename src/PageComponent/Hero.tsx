import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url('asset/world.png')",

        backgroundRepeat: "no-repeat",
      }}
      className="w-[100%] md:h-[80vh] h-[60vh] bg-cover bg-no-repeat bg-center overflow-hidden mx-auto  bg-[#F5F5F6] px-4 md:flex md:flex-row md:py-0 mt-14  md:mt-24"
    >
      <div className="lg:w-[80%] lg:pl-5 mx-auto md:pt-40 pt-14">
        <h1 className="lg:text-[60pt] md:text-[30pt] text-[18pt] font-[900] uppercase text-black ">
          Hi, I&apos;m
        </h1>
        <h1 className="lg:text-[40pt] md:text-[30pt] text-[28pt] font-[900] uppercase text-gray-500">
          {" "}
          Ogunmakinju Olanrewaju
        </h1>
        <p className="lg:text-[18pt] md:text-[15pt] text-[12pt] capitalize font-semibold lg:w-[60%] md:w-[60%] w-[60%] text-black ">
         A dynamic full-stack developer with a knack for turning innovative ideas
          into reality. With a solid foundation in both front-end and back-end
          technologies.
        </p>
      </div>
    </div>
  );
};

export default Hero;
