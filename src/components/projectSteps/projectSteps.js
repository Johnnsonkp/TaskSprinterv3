import "./progressSteps.css";

import React, { useState } from "react";

import { Steps } from "antd";

const ProjectSteps = ({ style }) => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description = "This is a description.";
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        size={"small"}
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          borderRadius: "10px",
          padding: "12px",
        }}
        items={[
          {
            title: "Organise Turkey Trip",
            // description,
          },
          {
            title: "Finish Next Portfolio",
            // description,
          },
          {
            title: "Create daily schedule",
            // description,
          },
        ]}
      />
    </>
  );
};
export default ProjectSteps;
