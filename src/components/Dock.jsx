import React, { useRef } from "react";
import { dockApps } from "../constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
const Dock = () => {
  const dockRef = useRef(null);

  useGSAP(() =>{
    const dock = dockRef.current;
    if(!dock) return;
    const icon = dock.querySelectorAll(".dock-icon")
  })

  const toggleApp = (app) => {
    // placeholder function for toggling app open/close
    console.log("Toggle app clicked:", app);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                className={canOpen ? "": "opacity=60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip"/>
      </div>
    </section>
  );
};

export default Dock;
