// import react from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <div className="flex flex-grow bg-Background min-h-screen relative overflow-hidden">
        <Navbar />
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
        ></div>
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
        ></div>
      </div>
    </>
  );
};

export default About;
