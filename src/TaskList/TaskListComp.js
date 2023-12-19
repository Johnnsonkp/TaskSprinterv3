import {
  CheckCircleOutlined,
  CloseSquareOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Collapse, List, Skeleton, Space, Table } from "antd";

import CustomTable from "../Table/AntDCustomTable";
import React from "react";
import TaskComp from "./TaskComp";
import { useState } from "react";

export default function TaskListComp(task) {
  console.log("task", task);
  const [toggle, setToggle] = useState(false);

  let arr = [];
  task.task.task.forEach((singleTask) => {
    let shortDate = singleTask.date && singleTask.date.slice(0, 10);
    arr.push({
      name: singleTask.name,
      subtasks: singleTask.subtasks,
      date: shortDate,
      completed: singleTask.completed,
    });
  });

  const columns = [
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      render: (text) => (
        <CheckCircleOutlined
          style={{ color: "green", fontSize: "28px", cursor: "pointer" }}
          onClick={() => (task.completed = !task.completed)}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Subtasks",
      dataIndex: "subtasks",
      key: "subtasks",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "Delete",
      render: (text) => (
        <CloseSquareOutlined
          style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
          //   onClick={() => (task.completed = !task.completed)}
          onClick={() => console.log("toggle", toggle)}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        // border: "1px solid rgba(140, 140, 140, 0.35)",
        textAlign: "left",
        // backgroundColor: "rgba(140, 140, 140, 0.35)",
      }}
    >
      {/* <Table columns={columns} dataSource={arr} /> */}
      <List
        dataSource={arr}
        renderItem={(item) => (
          // <List.Item key={item.email}>
          <List.Item
            style={{
              backgroundColor: "rgba(140, 140, 140, 0.15)",
              margin: "10px",
              borderRadius: "8px",
              padding: "0px 20px",
            }}
          >
            <List.Item.Meta
              avatar={
                <CheckCircleOutlined
                  style={{
                    color: "green",
                    fontSize: "28px",
                    cursor: "pointer",
                  }}
                  onClick={() => (task.completed = !task.completed)}
                />
              }
              title={<a>{item.name}</a>}
              // description={item.subtasks && item.subtasks}
            />
            {item.subtasks && <MessageOutlined />}

            <CloseSquareOutlined
              style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
              onClick={() => (task.completed = !task.completed)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
