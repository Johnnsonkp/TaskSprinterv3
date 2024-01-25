import { Breadcrumb } from "antd";
import React from "react";

function BreadCrumbComp() {
  return (
    <Breadcrumb style={{ marginLeft: "20px", marginBottom: "0px !important" }}>
      <Breadcrumb.Item>
        <h2 style={{ marginBottom: "0px", marginTop: "5px" }}>
          {window.location.pathname}
        </h2>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumbComp;
