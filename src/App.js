import "./App.css";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Button, Drawer, Space } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import { AppLogoContainer } from "./AppLogo/AppLogo";
import DefaultButton from "./Buttons/DefaultBtn";
import { DefaultContainer } from "./Containers/DefaultContainer";
import HandleFetchData from "./Helper/HandleFetch";
import React from "react";
import StandUpComponent from "./StandUp/StandUpComp";
import TaskForm from "./Form/TaskForm";
import TaskListIndex from "./TaskList";
import { defaultObj } from "./DefaultData/DefaultJSON";
import logo from "./logo.svg";

const { Header, Content, Sider } = Layout;

function App() {
  const [tasksContainer, setTasksContainer] = useState();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [subtaskInput, setSubtasksInput] = useState("");
  const onClose = () => {
    setOpen(false);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };
  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    }
  );

  function submitFormToNotion() {
    fetch("http://localhost:5000/submitFormToNotion", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput,
        completed: false,
        subtasks: subtaskInput,
        date_created: `${Date.now()}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  // useEffect(() => {
  //   if (toggle === true) {
  //     HandleFetchData("./taskObj.json", setTasksContainer);
  //     setToggle(false);
  //   }
  // }, [toggle, tasksContainer]);

  useEffect(() => {
    fetch("http://localhost:5000/fetchNotionData", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTasksContainer(data))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    submitFormToNotion();
  }
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <AppLogoContainer />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={["1", "2", "3", "4"]}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              backgroundColor: "#333",
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
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
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
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
                title={`Add New Task`}
                placement="right"
                size={"large"}
                onClose={onClose}
                open={open}
              >
                <form
                  style={{
                    cursor: "pointer",
                    border: "1px solid red",
                    borderRadius: "15px",
                    width: "55%",
                    margin: "auto",
                  }}
                >
                  <h3>Add New Card</h3>
                  <div className="addCard">
                    <p style={{ textAlign: "left", padding: "5px 35px" }}>
                      Input task name here
                    </p>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setNameInput(e.target.value)}
                      style={{ width: "90%" }}
                    />
                    <p style={{ textAlign: "left", padding: "5px 35px" }}>
                      Subtasks
                    </p>
                    <input
                      type="text"
                      id="subtasks"
                      onChange={(e) => setSubtasksInput(e.target.value)}
                      style={{ width: "90%" }}
                    />
                  </div>
                  <button onClick={(e) => onSubmit(e)}>Submit</button>
                </form>
                {/* <TaskForm
                  title={"Add New Task"}
                  setterFunc1={(e) => setNameInput(e.target.value)}
                  setterFunc2={(e) => setSubtasksInput(e.target.value)}
                  submitFunc={(e) => onSubmit(e.target.value)}
                /> */}
              </Drawer>
              <DefaultContainer content={<StandUpComponent />} />
              <DefaultContainer
                content={<TaskListIndex task={tasksContainer || defaultObj} />}
              />
              <Space>
                <Button type="primary" onClick={showLargeDrawer}>
                  Add New Task
                </Button>
              </Space>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
