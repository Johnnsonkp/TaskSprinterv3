import React, { useEffect, useState } from "react";

import { Calendar } from "antd";
import LoadSpiner from "../components/ui.components/loadSpiner/loadSpiner";
import ProductivityCard from "../StandUp/ProductivityCard";

function Home() {
  const [loading, setLoading] = useState(true);
  const HomeLayout = () => {
    const wrapperStyle = {
      width: 300,
      border: "3px solid lightGray",
      borderRadius: "10px",
      boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
    };
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: "20px",
          height: "100%",
        }}
      >
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} />
        </div>
        <div style={wrapperStyle}>
          <ProductivityCard />
        </div>
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
        boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
      }}
    >
      {loading ? <LoadSpiner /> : <HomeLayout />}
    </div>
  );
}

export default Home;
