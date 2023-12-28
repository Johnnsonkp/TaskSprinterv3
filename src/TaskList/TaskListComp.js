import "./index.css";

import { Button, Drawer } from "antd";
import {
  CheckCircleOutlined,
  CloseSquareOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Radio, Tabs } from "antd";
import { getData, postData } from "../Services/NotionAPI/useFetchData";
import { useEffect, useState } from "react";

import DefaultForm from "../Form/DefaultForm";
import { List } from "antd";
import React from "react";
import { reformatDate } from "../Helper/DateFormat";
import { removeData } from "../Services/NotionAPI/useFetchData";

export default function TaskListComp(task) {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectTask, setSelectTask] = useState();
  const [taskReloaded, setTaskReloaded] = useState();
  const [taskComplete, setTaskComplete] = useState(false);
  let arr = [];
  let taskArr = task.task.task;

  const onClose = () => {
    setOpen(false);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };
  function selectedTask(task) {
    console.log("selectedTask func task", task);
    setSelectTask(task);
  }

  task.task.task.forEach((singleTask) => {
    arr.push({
      name: singleTask.name,
      subtasks: singleTask.subtasks,
      date: singleTask.date || singleTask.date_created,
      completed: singleTask.completed,
      page_id: singleTask.page_id,
    });
  });

  const DeleteTask = (item) => {
    removeData(
      "https://tsv3-server-production.up.railway.app/archivePage",
      "put",
      item
    );
    setToggle(true);
  };

  async function TaskCompleteClicked(item) {
    item.completed = !item.completed;
    console.log("item:", item.completed, item);
    removeData(
      "https://tsv3-server-production.up.railway.app/updateNotionData",
      "put",
      item
    );
    setToggle(true);
  }
  async function taskReload() {
    const res = await getData(
      "https://tsv3-server-production.up.railway.app/fetchNotionData",
      "get"
    );
    setTaskReloaded(res);
  }

  useEffect(() => {
    if (selectTask) {
      showLargeDrawer();
    }
  }, [selectTask]);

  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        taskReload();
        setToggle(false);
      }, 200);
    }
  }, [toggle]);

  return (
    <div
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
        dataSource={
          taskReloaded &&
          Object.keys(taskReloaded).length !== 0 &&
          taskReloaded < arr
            ? taskReloaded
            : arr
        }
        renderItem={(item) => (
          <List.Item
            key={item.page_id}
            className="taskList"
            style={{
              backgroundColor: item.completed
                ? "lightGreen"
                : "rgba(140, 140, 140, 0.15)",
              margin: "8px",
              borderRadius: "8px",
              padding: "0px 10px",
              borderLeft: `5px solid ${
                item.completed ? "lightGreen" : "#1890ff70"
              }`,
            }}
          >
            <List.Item.Meta
              style={{
                marginRight: "15px",
              }}
              avatar={
                <CheckCircleOutlined
                  style={{
                    color: item.completed ? "lightGreen" : "#1890ff70",
                    fontSize: "28px",
                    cursor: "pointer",
                  }}
                  onClick={() => TaskCompleteClicked(item)}
                />
              }
              title={
                <a style={{ fontSize: "12px", alignItems: "center" }}>
                  {item.name}
                </a>
              }
            />
            {item.subtasks && <MessageOutlined />}
            <div style={{ marginLeft: "13px", marginRight: "13px" }}></div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => selectedTask(item)}
            >
              Expand
            </button>
            <div style={{ marginLeft: "12px", marginRight: "13px" }}></div>
            <List.Item.Meta
              style={{}}
              title={
                item.date.start && (
                  <a style={{ fontWeight: "thin", fontSize: "13px" }}>
                    Due: [ {reformatDate(item.date.start, "dd/MM - h:mm bbbb")}{" "}
                    ]
                  </a>
                )
              }
            />
            <CloseSquareOutlined
              style={{
                color: "red",
                fontSize: "25px",
                cursor: "pointer",
                border: "1px solid red",
              }}
              onClick={() => DeleteTask(item)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
