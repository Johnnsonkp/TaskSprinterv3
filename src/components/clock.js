import React, { useEffect, useState } from "react";

export default function Clock({ color, fontSize, fontWeight }) {
  const current = new Date();
  const initialDataObj = {
    hours: current.getHours(),
    minutes: current.getMinutes(),
    seconds: current.getSeconds(),
  };
  const [clock, setClock] = useState(initialDataObj);

  useEffect(() => {
    setClock("");
    setInterval(() => {
      const current = new Date();
      const dataObj = {
        name: "Time: ",
        hours:
          current.getHours() > 9
            ? current.getHours()
            : `0${current.getHours()}`,
        minutes:
          current.getMinutes() > 9
            ? current.getMinutes()
            : `0${current.getMinutes()}`,
        seconds:
          current.getSeconds() > 9
            ? current.getSeconds()
            : `0${current.getSeconds()}`,
      };
      setClock(dataObj);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        color: color ? color : "#fff",
        fontWeight: fontWeight ? fontWeight : "900",
        fontSize: fontSize ? fontSize : "18px",
      }}
    >
      {clock.hours} : {clock.minutes} : {clock.seconds}
      {/* {clock.hours} : {clock.minutes}pm */}
    </div>
  );
}
