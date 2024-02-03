import React, { useEffect, useState } from "react";

import { CalendarTwoTone } from "@ant-design/icons";
import Clock from "../clock";
import LoadSpiner from "./loadSpiner/loadSpiner";
import { reformatDate } from "../../Helper/DateFormat";

function BreadCrumbComp() {
  const [loading, setLoading] = useState(true);
  const pageTitle = window.location.pathname;
  const CapitalizeFirstLetter =
    pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div
      style={{
        marginBottom: "20px",
        borderRadius: "10px",
        padding: "0px 20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
      }}
    >
      <h1 style={{ fontSize: "18px", fontWeight: "600", margin: "0px" }}>
        {CapitalizeFirstLetter}
      </h1>

      <div
        className="breadcrumbClockDate"
        style={{
          fontWeight: "600",
          display: "flex",
          flex: 0.3,
          alignItems: "center",
          height: "100%",
          maxHeight: "50px",
          overflow: "hidden",
        }}
      >
        <hr style={{ border: "1px solid lightGray", height: "100px" }}></hr>
        <div style={{ marginRight: "12px" }}>
          <CalendarTwoTone size={"large"} />{" "}
          {reformatDate(Date.now(), "dd MMM yyyy")}
        </div>
        <hr style={{ border: "1px solid lightGray", height: "100px" }}></hr>
        <div style={{ marginLeft: "12px" }}>
          {loading ? (
            "00:00:00"
          ) : (
            <Clock color={"#333"} fontSize fontWeight={"700"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbComp;
