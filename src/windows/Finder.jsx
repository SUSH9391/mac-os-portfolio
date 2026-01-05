import { Search } from "lucide-react";
import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants/index.js";
import useLocationStore from "#store/location.js";
import clsx from "clsx";

const Finder = () => {
  const { activeLocaton, setActiveLocation } = useLocationStore();
  const openItem = (item) => {}
  const renderList = (name, items) =>
    <div>
        <h3>{name}</h3>
   <ul>{
    items.map((items) => (
                <li
                  key={items.id}
                  onClick={() => setActiveLocation(items.id)}
                  className={clsx(
                    items.id === activeLocaton.id ? "active" : "not-active"
                  )}
                >
                  <img src={items.icon} className="w-4" alt={items.name} />
                  <p className="text-sm font-medium truncate">{items.name}</p>
                </li>
              ))}
              </ul>
               </div>
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          
            {renderList('Favorites', Object.values(locations))}
            {renderList('Work', locations.work.children)}
          </div>

           <ul className="content">
        {activeLocaton?.children.map((item) => (
          <li key={item.id} className={item.position} 
          onClick={()=> openItem(item)}>
            <img src={item.icon} alt={item.name}/>
            <p>
                {item.name}
            </p>
          </li>
        ))
        }
      </ul>
          
      </div>
     
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default Finder;
