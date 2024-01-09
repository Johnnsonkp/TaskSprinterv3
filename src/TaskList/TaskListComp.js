import "./index.css";

import { Button, Collapse, Divider, Drawer, Space } from "antd";
import {
  CheckCircleOutlined,
  CloseSquareOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Radio, Tabs } from "antd";
import { getData, postData } from "../Services/NotionAPI/useFetchData";
import { useEffect, useState } from "react";

import CustomDivider from "../components/ui.components/CustomDivider";
import DefaultForm from "../Form/DefaultForm";
import { InputNumber } from "antd";
import { List } from "antd";
import React from "react";
import StatusTab from "../components/ui.components/StatusTab";
import { reformatDate } from "../Helper/DateFormat";

const onChange = (value) => {
  console.log("changed", value);
};

export default function TaskListComp({ task, handleDelete, UpdateTask }) {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectTask, setSelectTask] = useState();
  const [taskReloaded, setTaskReloaded] = useState();
  const [completedTasks, setCompletedTasks] = useState();
  const [taskComplete, setTaskComplete] = useState(false);
  const [toggleTaskComletion, setToggleTaskCompletion] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };
  function selectedTask(task) {
    setSelectTask(task);
  }

  let arr = [];
  task.forEach((singleTask, index) => {
    arr.push({
      key: index,
      name: singleTask.name,
      subtasks: singleTask.subtasks,
      date: singleTask.date || singleTask.date_created,
      completed: singleTask.completed,
      page_id: singleTask.page_id,
    });
  });

  async function TaskCompleteClicked(item) {
    item.completed = !item.completed;
    UpdateTask(item);
    setToggle(true);
  }
  const onTaskDelete = (item) => {
    handleDelete(item);
    setToggle(true);
  };

  useEffect(() => {
    if (selectTask) {
      showLargeDrawer();
    }
  }, [selectTask]);

  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        console.log("setTimeout");
        taskReload();
      }, [400]);

      async function taskReload() {
        const res = await getData(
          "https://tsv3-server-production.up.railway.app/fetchNotionData",
          "get"
        );
        setTaskReloaded(res.filter((task) => task.completed === false));
        setCompletedTasks(res.filter((task) => task.completed === true));
      }
      setToggle(false);
    }
  }, [TaskCompleteClicked, taskReloaded]);

  return (
    <div
      id="taskliskContainer"
      style={{
        textAlign: "left",
      }}
    >
      <Drawer
        title={`Task Form`}
        placement="right"
        size={"large"}
        onClose={onClose}
        open={open}
      >
        {open && selectTask.name ? (
          <DefaultForm
            formTitle={"Update Task"}
            task={selectTask}
            UpdateTask={UpdateTask}
          />
        ) : null}
      </Drawer>
      <List
        style={{
          cursor: "pointer",
        }}
        dataSource={
          (taskReloaded && taskReloaded.concat(completedTasks)) || arr
        }
        renderItem={(item, index) => (
          <List.Item
            key={index}
            className="taskList"
            style={{
              backgroundColor: item.completed
                ? "rgba(0, 200, 117, 0.1)"
                : "rgba(140, 140, 140, 0.15)",
              margin: "8px",
              borderRadius: "5px",
              padding: "0px 10px",
              borderLeft: `5px solid ${
                item.completed ? "rgba(103, 245, 149, 1)" : "#1890ff70"
              }`,
            }}
          >
            <List.Item.Meta
              style={{
                textAlign: "left",
                flex: 2.8,
                // border: "1px solid red",
                display: "flex",
                alignItems: "center",
              }}
              avatar={
                <span style={{ display: "flex" }}>
                  <CheckCircleOutlined
                    style={{
                      color: item.completed
                        ? "rgba(103, 245, 149, 1)"
                        : "#1890ff70",
                      fontSize: "28px",
                      cursor: "pointer",
                    }}
                    className="checkCircleOutlined"
                    onClick={() => TaskCompleteClicked(item)}
                  />
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={0}
                    onChange={onChange}
                    size={"small"}
                    width={"2px"}
                    style={{
                      width: "40px",
                      background: "transparent",
                      marginRight: "5px",
                      marginLeft: "5px",
                    }}
                    className="inputNumber"
                  />
                </span>
              }
              title={
                <a
                  className="tasklistTitle"
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.name}
                </a>
              }
            />
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>
            {item.subtasks && <MessageOutlined className="customDivider" />}
            <span style={{ width: "10px" }}></span>
            {/* <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span> */}

            <button
              className="expandBtn"
              style={{ cursor: "pointer" }}
              onClick={() => selectedTask(item)}
            >
              Expand
            </button>
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>
            <span className="statusTab">
              <StatusTab style={{ background: "transparent" }} />
            </span>
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>
            <List.Item.Meta
              className="tasklistDate"
              style={{}}
              title={
                item.date.start && (
                  <button
                    style={{ border: "1px solid lightGray" }}
                    onClick={(event) => event.preventDefault()}
                  >
                    <a
                      style={{
                        fontWeight: "thin",
                        fontSize: "13px",
                        fontWeight: "normal",
                        color: "#333",
                      }}
                    >
                      Due: {reformatDate(item.date.start, "dd/MM - h:mm bbbb")}{" "}
                    </a>
                  </button>
                )
              }
            />
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>
            <CloseSquareOutlined
              className="CloseSquareOutlined"
              style={{
                color: "red",
                fontSize: "25px",
                cursor: "pointer",
                border: "1px solid red",
              }}
              onClick={() => onTaskDelete(item)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
