import { List, Skeleton, Space, Table } from "antd";

import React from "react";

export default function TaskComp({ name, completed, date, subtasks, columns }) {
  let data = [{ name, completed, date }];

  return (
    <div
    //   key={key}
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     width: "100%",
    //     margin: "auto",
    //   }}
    >
      {/* <h3>{name}</h3>
      <p>
        Subtask:
        {subtasks &&
          subtasks.map((subtask) => {
            return <p key={subtask.id}>{subtask.name}</p>;
          })}
      </p>
      <p>Task Completed: {completed ? "Yes" : "No"}</p>
      <p>Date Created: {date}</p> */}

      {/* <Skeleton active> */}
      <Table columns={columns} dataSource={data} />
      {/* </Skeleton> */}
    </div>
  );
}
