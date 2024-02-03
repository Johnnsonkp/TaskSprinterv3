import Clock from "../../clock";
import React from "react";
import { reformatDate } from "../../../Helper/DateFormat";

function DateTimeWeather() {
  return (
    <div
      style={{
        border: "1px solid red",
        height: "50px",
        width: "80px",
        inset: "-15px",
        boxShadow: "rgba(0, 0, 0, 0.6) 0px 0px 0px 5000px inset",
        color: "#fff",
        height: "200px",
        width: "200px",
        border: "3px solid lightGray",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "50%",
          fontWeight: "bold",
        }}
      >
        <Clock />
        {reformatDate(Date.now(), "dd MMM yyyy")}
      </div>
      <hr style={{ width: "100%" }}></hr>
      <div
        style={{
          height: "50%",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          fontSize: "17px",
          fontWeight: "bold",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>26C</span>
          <span>Today</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>31C</span>
          <span>Sun</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>18C</span>
          <span>Mon</span>
        </div>
      </div>
    </div>
  );
}

export default DateTimeWeather;
