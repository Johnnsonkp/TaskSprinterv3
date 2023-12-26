import { Card, Col, Row } from "antd";
import { Divider, List, Typography } from "antd";
import { useEffect, useState } from "react";

import React from "react";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
];

function StandUpComponent() {
  return (
    <div
      style={{
        border: "2px solid lightBlue",
        borderRadius: "15px",
        padding: "25px",
        margin: "auto !important",
        background: `url("/header-background copy.svg")`,
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <List
            size="small"
            style={{
              backgroundColor: "#92C8E8",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 6px 12px 0px",
              cursor: "pointer",
            }}
            header={
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                Stand Up
              </div>
            }
            bordered
            dataSource={data}
            renderItem={(item, i) => (
              <List.Item>
                <span>{i + 1}</span>:{item}
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <List
            style={{ backgroundColor: "#92C8E8" }}
            size="small"
            header={
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                Stand Down
              </div>
            }
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>
    </div>
  );
}
export default StandUpComponent;
