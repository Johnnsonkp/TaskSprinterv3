import { List } from "antd";
import React from "react";
import { reformatDate } from "../Helper/DateFormat";

export default function TaskListDate({ item }) {
  return (
    <List.Item.Meta
      className="tasklistDate"
      title={
        item.date.start && (
          <button
            style={{
              border: "1px solid lightGray",
            }}
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
  );
}
