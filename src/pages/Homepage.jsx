import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/images/hero1.svg";
import { PiSealCheckFill } from "react-icons/pi";
// import { Link } from "react-router-dom";
import "../App.css";

const Homepage = () => {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    divRef.current.classList.add("slide-in");
    divRef2.current.classList.add("slide-down");
  }, []);
  return (
    <>
      <div className="flex flex-grow items-center justify-center bg-Background min-h-screen relative overflow-hidden">
        <Navbar hover={hover}/>
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
        ></div>
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
        ></div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-revert items-center w-full z-10 p-8 mt-16">
            <div className="flex flex-col justify-between items-center w-1/2">
              <div
                style={{ width: "460px", height: "209px", flexShrink: "0" }}
                ref={divRef2}
                className="font-outfit font-semibold text-5xl leading-tight text-Primary"
              >
                Simplifying location identification and geospatial queries.
              </div>
              <div
                style={{ width: "456px", height: "100px", flexShrink: "0" }}
                ref={divRef}
                className="font-outfit font-light text-Primary mt-6 text-lg"
              >
                An application that simplifies your geospatial queries by
                recognising locations with precision and speed. Backed by
                cutting edge Machine Learning and Natural Language Processing
                models.
              </div>
            </div>
            <div
              style={{ width: "650px", height: "488px", flexShrink: "0" }}
              className="flex-shrink-0 w-1/2"
            >
              <img src={hero} alt="Hero" className="ufo h-full w-full" />
            </div>
          </div>
          <div
            // style={{ width: "935px", height: "72px" }}
            //on hover syntax
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex justify-between items-center w-3/5 px-12 py-6 rounded-lg bg-white bg-opacity-5"
          >
            <div className="flex items-center text-xl space-x-4 text-Primary">
              <PiSealCheckFill />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center text-xl space-x-4 text-Primary">
              <PiSealCheckFill />
              <span>Semantic Search</span>
            </div>
            <div className="flex items-center text-xl space-x-4 text-Primary">
              <PiSealCheckFill />
              <span>Precise Locations</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
