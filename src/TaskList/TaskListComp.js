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
import { List } from "antd";
import React from "react";
import StatusTab from "../components/ui.components/StatusTab";
import { reformatDate } from "../Helper/DateFormat";
import { removeData } from "../Services/NotionAPI/useFetchData";

export default function TaskListComp({ task, handleDelete, UpdateTask }) {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectTask, setSelectTask] = useState();
  const [taskReloaded, setTaskReloaded] = useState();
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
  task.forEach((singleTask) => {
    arr.push({
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
    console.log("taskReloaded", taskReloaded);
    setTaskReloaded(
      taskReloaded
        ? taskReloaded.filter((oldData) => oldData !== item)
        : arr.filter((oldData) => oldData !== item)
    );
    handleDelete(item);
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
        setTaskReloaded(res);
      }
      setToggle(false);
    }
  }, [TaskCompleteClicked]);

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
          <DefaultForm formTitle={"Update Task"} task={selectTask} />
        ) : null}
      </Drawer>
      <List
        style={{
          cursor: "pointer",
        }}
        dataSource={taskReloaded || arr}
        renderItem={(item) => (
          <List.Item
            key={item.page_id}
            className="taskList"
            style={{
              backgroundColor: item.completed
                ? "rgba(0, 200, 117, 0.1)"
                : "rgba(140, 140, 140, 0.15)",
              margin: "8px",
              borderRadius: "8px",
              padding: "0px 10px",
              borderLeft: `5px solid ${
                item.completed ? "rgba(103, 245, 149, 1)" : "#1890ff70"
              }`,
            }}
          >
            <List.Item.Meta
              style={{
                // marginRight: "15px",
                // width: "90%",
                textAlign: "left",
                flex: 1.8,
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
                    onClick={() => TaskCompleteClicked(item)}
                  />
                  <span className="customDivider">
                    <CustomDivider className="customDivider" />
                  </span>
                </span>
              }
              title={
                <a
                  className="tasklistTitle"
                  style={{ fontSize: "12px", alignItems: "center" }}
                >
                  {item.name}
                </a>
              }
            />
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>
            {item.subtasks && <MessageOutlined className="customDivider" />}
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>

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
            <List.Item.Meta
              className="tasklistDate"
              style={{}}
              title={
                item.date.start && (
                  <a
                    style={{
                      fontWeight: "thin",
                      fontSize: "13px",
                      fontWeight: "normal",
                    }}
                  >
                    Due: {reformatDate(item.date.start, "dd/MM - h:mm bbbb")}{" "}
                  </a>
                )
              }
            />
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>
            <span className="statusTab">
              <StatusTab />
            </span>
            <span className="customDivider">
              <CustomDivider className="customDivider" />
            </span>
            <CloseSquareOutlined
              style={{
                color: "red",
                fontSize: "25px",
                cursor: "pointer",
                border: "1px solid red",
              }}
              // onClick={() => handleDelete(item)}
              onClick={() => onTaskDelete(item)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
