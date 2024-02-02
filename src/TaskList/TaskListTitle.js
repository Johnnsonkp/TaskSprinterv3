import { CheckCircleOutlined } from "@ant-design/icons";
import { InputNumber } from "antd";
import { List } from "antd";
import React from "react";

function TaskListTitle({ item, TaskCompleteClicked }) {
  return (
    <List.Item.Meta
      style={{
        textAlign: "left",
        flex: 2.3,
        display: "flex",
        alignItems: "center",
      }}
      avatar={
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
          <InputNumber
            min={1}
            max={10}
            defaultValue={0}
            size={"small"}
            width={"2px"}
            style={{
              width: "40px",
              background: "transparent",
              marginRight: "0px",
              marginLeft: "5px",
              border: "1px solid #fff",
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
  );
}

export default TaskListTitle;
