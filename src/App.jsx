import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
function App() {

  let [items, setItems] = useState([]);
  let [settings, setSettings] = useState({});


  useEffect(() => {
    window.items.loadConfig().then((response) => {
      setSettings(response.settings);
      setItems(response.items);
    })
  }, []);
  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,  zIndex: -1,backgroundImage: settings.bgImage ? `url(images/bg/${settings.bgImage})` : "none", backgroundColor: settings.bgColor, opacity: settings.bgOpacity}}></div>
    <div className={`w-full min-h-screen`} style={{padding: settings.margin || "4px"}}>
        <ul className="grid grid-cols-3" style={{ gap: settings.buttonGap || "4px" }}>
      {items.map((item,idx) => (
        <li key={idx}
          className="cursor-pointer text-center p-8 shadow-lg"
          style={
            {
              backgroundColor: item.bgColor ? item.bgColor : settings.buttonBgColor || "rgba(255,255,255,0.25)",
              color: item.textColor ? item.textColor : settings.buttonTextColor || "white",
              borderRadius: item.buttonRadius ? item.buttonRadius : settings.buttonRadius || "0",
              borderWidth: item.buttonBorderWidth ? item.buttonBorderWidth : settings.buttonBorderWidth || "2",
              borderColor: item.buttonBorderColor ? item.buttonBorderColor : settings.buttonBorderColor || "white",
            }}
          onClick={(e) => { console.log(window.items); window.items.launchItem(item.command) }}
        >
          {item.icon && <img className="w-24 max-h-24 mb-4 mx-auto" src={`images/icons/${item.icon}`} />}{item.label}</li>
      ))}
        </ul>
      </div>
      </>
  );
}

export default App;
