import { Button, Card, Progress } from "antd";
import React, { useEffect, useRef } from "react";

import ProjectSteps from "../components/projectSteps/projectSteps";

export default function ProductivityCard({ taskArr }) {
  return (
    <>
      <Card
        title={"Monthly Goals"}
        bordered={false}
        style={{
          minWidth: 300,
          minHeight: 210.14,
          maxHeight: 210.14,
          textAlign: "left",
          boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
          backgroundColor: "#111",
          backgroundImage: `url("/do-more-2.jpg")`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          color: "#fff !important",
        }}
      >
        <ProjectSteps style={{ color: "#fff" }} />
      </Card>
    </>
  );
}
