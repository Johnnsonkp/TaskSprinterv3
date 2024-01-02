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
                ? "rgba(103, 245, 149, 0.4)"
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
                marginRight: "15px",
              }}
              avatar={
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
              onClick={() => handleDelete(item)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
