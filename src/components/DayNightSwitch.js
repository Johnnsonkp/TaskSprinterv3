import { BulbOutlined, Loading3QuartersOutlined } from "@ant-design/icons";

import React from "react";
import { Switch } from "antd";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

export default function DayNightSwitch() {
  return (
    <>
      {/* <Loading3QuartersOutlined /> */}
      <Switch
        defaultChecked
        onChange={onChange}
        style={{ width: "85%", border: "1px solid lightGrey" }}
      />
      {/* <BulbOutlined /> */}
    </>
  );
}
