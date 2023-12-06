import Navbar from "../components/Navbar";
import Timeline from "./Timeline";

const How = () => {

  const details = [
    { tab: 'Step 1', content: 'content for step1' },
    { tab: 'Step 2', content: 'Content for step2' },
    { tab: 'Step 3', content: 'Content for step3' },
  ];

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
            <div className="w-screen h-screen relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <div className="text-white text-4xl font-bold justify-center hidden sm:flex">
                        How Does It Work?
                    </div>
                    <div 
                    className="text-white mx-auto w-1/2 text-2xl mt-5 font-light justify-center hidden sm:flex border border-solid border-teal-200 rounded-lg p-8" >
                        Welcome Aboard! Effortlessly recognize locations in your queries, whether it is an address, landmark, or coordinates. GeoQuery interprets natural language, making it the smartest choice for all your geospatial queries.
                    </div>
                    <div className="text-white text-2xl font-bold mt-10 justify-center hidden sm:flex">
                        <Timeline details={details}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default How;
