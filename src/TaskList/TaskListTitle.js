import { CheckCircleOutlined } from "@ant-design/icons";
import { InputNumber } from "antd";
import { List } from "antd";
import React from "react";
import TaskListDivider from "./TaskListDivider";

function TaskListTitle({ item, TaskCompleteClicked }) {
  return (
    <List.Item.Meta
      style={{
        textAlign: "left",
        flex: 2.3,
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
      avatar={
        <>
          <span style={{ display: "flex" }}>
            <CheckCircleOutlined
              style={{
                color: item.completed ? "rgba(103, 245, 149, 1)" : "#1890ff70",
                fontSize: "28px",
                cursor: "pointer",
              }}
              className="checkCircleOutlined"
              onClick={() => TaskCompleteClicked(item)}
            />
            <TaskListDivider />
            <InputNumber
              min={1}
              max={10}
              defaultValue={0}
              size={"small"}
              width={"2px"}
              style={{
                width: "40px",
                height: "42px",
                background: "transparent",
                marginRight: "-15px",
                marginLeft: "-15px",
                border: "1px solid #fff",
                paddingTop: "10px",
              }}
              className="inputNumber"
            />
            <TaskListDivider />
          </span>
        </>
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
  );
}

export default TaskListTitle;
