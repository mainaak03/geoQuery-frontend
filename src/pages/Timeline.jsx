import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timeline = ({ details }) => {

  Timeline.propTypes = {
    details: PropTypes.array.isRequired,
  };

  const [activeTab, setActiveTab] = useState(details[0].tab);
  const [activeDetail, setActiveDetail] = useState(details[0].content);
  const [current, setCurrent] = useState(0);

  const handleTabClick = (details) => {
    setActiveTab(details.tab);
    setActiveDetail(details.content);
    setCurrent(details.tab.substring(5) - 1);
  };

  const handlePrev = () => {
    var prevIndex = current - 1;
    if (prevIndex >= 0) {
      handleTabClick(details[prevIndex]);
    } else {
      prevIndex = details.length - 1;
      handleTabClick(details[prevIndex]);
    }
  };

  const handleNext = () => {
    const nextIndex = (current + 1) % details.length;
    if (nextIndex < details.length) {
      handleTabClick(details[nextIndex]);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        handlePrev();
        break;
      case "ArrowRight":
        handleNext();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current]);

  return (
    <div>
      <div style={{ display: "flex",alignItems: "center" }} className="mx-auto justify-center">
        <button onClick={handlePrev}>
          &#11160;
        </button>
        {details.map((detail) => (
          <div
            key={detail.tab}
            style={{
              padding: "10px 100px",
              cursor: "pointer",
              fontWeight: activeTab === detail.tab ? "bold" : "normal",
            }}
            onClick={() => handleTabClick(detail)}
          >
            {detail.tab}
            {activeTab === detail.tab && (
              <div
                key={detail.tab}
                style={{
                  paddingBottom: "10px",
                  borderBottom:
                    activeTab === detail.tab
                      ? "2px solid white"
                      : "2px solid transparent",
                }}
                onClick={() => handleTabClick(detail)}
              ></div>
            )}
          </div>
        ))}
        <button onClick={handleNext}>&#11162;</button>
      </div>
      <div
        className="text-white text-xl font-medium justify-center hidden sm:flex bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-20 p-5 mt-10 mx-auto w-1/2"
        
      >
        {activeDetail}
      </div>
    </div>
  );
};

export default Timeline;
