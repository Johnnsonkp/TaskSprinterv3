import { CalendarTwoTone } from "@ant-design/icons";
import Clock from "../clock";
import React from "react";
import { reformatDate } from "../../Helper/DateFormat";

function BreadCrumbComp() {
  const pageTitle = window.location.pathname;
  const CapitalizeFirstLetter =
    pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2);

  return (
    <div
      style={{
        marginBottom: "20px",
        borderRadius: "10px",
        padding: "3px 20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ fontSize: "18px", fontWeight: "600" }}>
        {CapitalizeFirstLetter}
      </h1>
      <div style={{ fontWeight: "600", display: "flex" }}>
        <div style={{ marginRight: "12px" }}>
          <CalendarTwoTone size={"large"} />{" "}
          {reformatDate(Date.now(), "dd / MM / yyyy")}
        </div>
        |
        <div style={{ marginLeft: "12px" }}>
          <Clock color={"#333"} fontSize fontWeight={"700"} />
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbComp;
