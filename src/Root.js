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
import { Link } from "react-router-dom";
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

  const clickedLink = (event) => {
    console.log("e", `/${event.target.innerText}`);
    window.location.assign(`/${event.target.innerText}`);
  };

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
              defaultSelectedKeys={["2"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 5,
                textAlign: "left",
                background: `url("/header-background copy.svg")`,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                // boxShadow: rgba(100, 100, 100, 0.3) 0px 0px 5px 3px;
              }}
              // items={items2}
              items={[
                {
                  key: 1,
                  icon: <UserOutlined style={{ fontWeight: "bold" }} />,
                  label: <h4 onClick={(event) => clickedLink(event)}>Home</h4>,
                },
                {
                  key: 2,
                  icon: <UserOutlined />,
                  label: <h4 onClick={(event) => clickedLink(event)}>Main</h4>,
                },
                {
                  key: 3,
                  icon: <UserOutlined />,
                  label: <h4 onClick={(event) => clickedLink(event)}>Notes</h4>,
                },
              ]}
              border={true}
              // theme={"light"}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "8px 0",
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
