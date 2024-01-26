import { Button, Card, Progress } from "antd";
import React, { useEffect, useRef } from "react";

import { reformatDate } from "../Helper/DateFormat";
import { styles } from "./standUp.styles";

const customStyles = { styles };

export default function CompletedTaskRate({ taskArr }) {
  const completedTaskCount = (taskArray) => {
    let counter = 0;
    {
      taskArr &&
        taskArr.map((task) => (task.completed === true ? counter++ : null));

      return parseInt(counter);
    }
  };
  const taskCreatedToday = () => {
    let counter = 0;
    {
      taskArr && taskArr.map((task, index) => counter++);
      return parseInt(counter);
    }
  };

  const completedPercentage = (taskCreatedToday, completedTaskCount) => {
    const percentage = (taskCreatedToday / completedTaskCount) * 100;
    return parseInt(percentage);
  };

  return (
    <div
      id="completed"
      style={{
        background: "rgb(198, 255, 221)",
        marginTop: "0px",
        backgroundImage: `url("/public/do-more.jpg")`,
      }}
    >
      <Card
        title="Completion Rate (%)"
        bordered={true}
        style={{
          minWidth: 480,
          minWidth: 300,
          minHeight: 210.14,
          maxHeight: 210.14,
          textAlign: "left",
          boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
          background: "#C6FFDD",
          backgroundImage: `url("/public/do-more.jpg")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          padding: "0px !important",
          opacity: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "0px",
            background: "transparent",
          }}
        >
          <Progress
            strokeWidth={9}
            type="circle"
            percent={completedPercentage(
              completedTaskCount(),
              taskCreatedToday()
            )}
            size={120}
            strokeColor={
              completedPercentage(completedTaskCount(), taskCreatedToday()) >=
              80
                ? "lightGreen"
                : completedPercentage(
                    completedTaskCount(),
                    taskCreatedToday()
                  ) >= 50
                ? "orange"
                : "red"
            }
            trailColor={"#9996"}
            style={{
              background: "transparent",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "#fff",
                backgroundColor: "#F4F4F5",
                borderRadius: "5px",
                borderLeft: "5px solid blue",
                borderTopLeftRadius: "2px",
                borderBottomLeftRadius: "2px",
                marginBottom: "5px",
                paddingTop: "3px",
                paddingBottom: "3px",
                padding: "6px",
              }}
            >
              <a style={{ marginTop: "0px", margin: "0px" }}>Task Created: </a>
              <a
                style={{
                  paddingLeftt: "0px",
                  marginTop: "0px",
                  margin: "0px",
                  textAlign: "right",
                }}
              >
                {taskCreatedToday()}
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px",
                backgroundColor: "#F4F4F5",
                marginTop: "5px",
                borderRadius: "5px",
                borderTopLeftRadius: "2px",
                borderBottomLeftRadius: "2px",
                borderLeft: "5px solid blue",
                padding: "3px",
                padding: "6px",
              }}
            >
              <a style={{ margin: "0px" }}>Task Completed: </a>
              <a style={{ paddingRight: "0px", margin: "0px" }}>
                {completedTaskCount()}
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
