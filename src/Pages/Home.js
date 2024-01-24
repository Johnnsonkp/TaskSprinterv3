import React, { useEffect, useState } from "react";

import Clock from "../components/clock";
import LoadSpiner from "../components/ui.components/loadSpiner/loadSpiner";

function Home() {
  const [loading, setLoading] = useState(true);
  const HomeLayout = () => {
    return (
      <div
        style={{
          color: "#333",
          position: "absolute",
          top: "10%",
          fontSize: "50rem",
          border: "5px solid white",

          margin: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "200px",
          height: "50%",
          fontSize: "30px !important",
          zIndex: 9000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
        }}
      >
        <Clock />
      </div>
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div
      style={{
        background: `url("/home-images/pink-back.jpg")`,
        background: `url("/home-images/water-peace.jpg")`,
        backgroundSize: "cover",
        width: "100%",
        height: "85vh",
        position: "relative",
        borderRadius: "20px",
      }}
    >
      {loading ? <LoadSpiner /> : <HomeLayout />}
    </div>
  );
}

export default Home;
