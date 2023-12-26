import "./index.css";

import { Button, Drawer } from "antd";
import {
  CheckCircleOutlined,
  CloseSquareOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Radio, Tabs } from "antd";
import { useEffect, useState } from "react";

import DefaultForm from "../Form/DefaultForm";
import { List } from "antd";
import React from "react";
import { getData } from "../Services/NotionAPI/useFetchData";
import { reformatDate } from "../Helper/DateFormat";
import { removeData } from "../Services/NotionAPI/useFetchData";

export default function TaskListComp(task) {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectTask, setSelectTask] = useState();
  const [taskComplete, setTaskComplete] = useState(false);

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

  let arr = [];
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
    removeData("http://localhost:5000/archivePage", "put", item);
    // setToggle(true);
    window.location.reload();
  };

  const TaskCompleteClicked = (item) => {
    item.completed = !item.completed;
    setTaskComplete(!taskComplete);
  };

  useEffect(() => {
    if (selectTask) {
      showLargeDrawer();
    }
  }, [selectTask]);

  // useEffect(() => {
  //   getData("http://localhost:5000/fetchNotionData", "get");
  //   setToggle(false);
  // }, [toggle]);

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
        dataSource={arr}
        renderItem={(item) => (
          <List.Item
            key={item.page_id}
            className="taskList"
            style={{
              backgroundColor: "rgba(140, 140, 140, 0.15)",
              margin: "8px",
              borderRadius: "8px",
              padding: "0px 10px",
            }}
          >
            <List.Item.Meta
              style={{
                marginRight: "15px",
              }}
              avatar={
                <CheckCircleOutlined
                  style={{
                    color: taskComplete ? "lightGreen" : "lightBlue",
                    fontSize: "28px",
                    cursor: "pointer",
                  }}
                  onClick={() => TaskCompleteClicked(item)}
                />
              }
              title={<a>{item.name}</a>}
            />
            {item.subtasks && <MessageOutlined />}
            <div style={{ marginLeft: "12px", marginRight: "13px" }}></div>
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
