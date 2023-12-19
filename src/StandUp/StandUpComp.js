import { Card, Col, Row } from "antd";
import { Divider, List, Typography } from "antd";

import React from "react";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
];

const StandUpComponent = () => (
  <div
    style={{
      border: "2px solid lightBlue",
      borderRadius: "15px",
      padding: "25px",
      margin: "auto !important",
    }}
  >
    <Row gutter={16}>
      <Col span={12}>
        {/* <Card title="Stand Up" bordered={true}>
          <ul style={{ listStyle: "none" }}>
            <li>1. Task one</li>
            <li>2. Task two</li>
            <li>3. Task three</li>
          </ul>
        </Card> */}
        <List
          size="small"
          header={
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>Stand Up</div>
          }
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
      <Col span={12}>
        {/* <Card title="Stand Down" bordered={true}>
          <ul style={{ listStyle: "none" }}>
            <li>1. Task one</li>
            <li>2. Task two</li>
            <li>3. Task three</li>
          </ul>
        </Card> */}
        <List
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
export default StandUpComponent;
