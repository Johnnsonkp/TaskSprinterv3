import { Breadcrumb } from "antd";
import React from "react";

function BreadCrumbComp() {
  return (
    <Breadcrumb
      style={{
        margin: "8px 10px",
      }}
    >
      <Breadcrumb.Item>{window.location.origin}</Breadcrumb.Item>
      <Breadcrumb.Item>{window.location.pathname}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumbComp;
