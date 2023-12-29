import "./App.css";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Button, Drawer, Space } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import DayNightSwitch from "./components/DayNightSwitch";
import Nav from "./components/ui.components/Nav";
import React from "react";
import TaskForm from "./Form/TaskForm";
import Wave from "./components/ui.components/RainbowAnimation";

const { Header, Content, Sider } = Layout;

function PageBoilerPlate(component) {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };
  const appPages = ["Home", "Main Workspace", "Notes"];

  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: appPages[index],
      };
    }
  );

  return (
    <div className="App">
      <Layout>
        <Nav />
        <Layout>
          <Sider
            width={220}
            style={{
              backgroundColor: "#fff",
            }}
          >
            {/* <div style={{ marginTop: "20px" }}>
              <DayNightSwitch />
            </div> */}
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 5,
                textAlign: "left",
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "13px 0",
              }}
            >
              {/* <Wave /> */}
              <Breadcrumb.Item>Auth</Breadcrumb.Item>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                backgroundColor: "#fff",
                borderRadius: "15px",
              }}
            >
              <Drawer
                title={`Task Form`}
                placement="right"
                size={"large"}
                onClose={onClose}
                open={open}
              >
                <TaskForm formTitle="Add New Task" />
              </Drawer>
              {component.component}
              <Space>
                {/* <Button type="primary" onClick={showLargeDrawer}>
                  Add New Task
                </Button> */}
              </Space>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default PageBoilerPlate;
