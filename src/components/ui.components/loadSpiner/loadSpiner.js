import { Alert, Flex, Spin } from "antd";
import { Skeleton, Space } from "antd";

import React from "react";

function LoadSpiner() {
  return (
    <div style={{ height: "80vh" }}>
      <Flex gap="large" vertical>
        <Spin size={"large"} tip="Loading...">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "100px",
            }}
          >
            <Space>
              <Skeleton.Button size={"large"} active={true} />
              <Skeleton.Avatar size={"large"} active={true} />
              <Skeleton.Input size={"large"} active={true} />
              <Skeleton.Input size={"large"} active={true} />
              <Skeleton.Input size={"large"} active={true} />
              <Skeleton.Input size={"large"} active={true} />
            </Space>

            <Skeleton size={"large"} active={true} />
            <Skeleton size={"large"} active={true} />
          </div>
        </Spin>
      </Flex>
    </div>
  );
}

export default LoadSpiner;
