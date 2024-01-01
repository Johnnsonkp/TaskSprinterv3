import { Button, Card, Progress } from "antd";

import React from "react";
import { reformatDate } from "../Helper/DateFormat";
import { styles } from "./standUp.styles";

const customStyles = { styles };

export default function CompletedTaskRate(tasks) {
  const styles = {
    card: {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 6px 12px 0px",
      cursor: "pointer",
      marginTop: "50px",
      padding: "0px !important",
    },
  };
  const completedTaskCount = (tasks) => {
    let counter = 0;
    {
      tasks &&
        tasks.map((task) =>
          task.completed === true &&
          reformatDate(task.date.start || task.date_created, "dd/MM/yyyy") ===
            reformatDate(Date.now(), "dd/MM/yyyy")
            ? counter++
            : null
        );
      return parseInt(counter);
    }
  };
  const taskCreatedToday = (tasks) => {
    let counter = 0;
    {
      tasks &&
        tasks.map((task) =>
          reformatDate(task.date.start || task.date_created, "dd/MM/yyyy") ===
          reformatDate(Date.now(), "dd/MM/yyyy")
            ? counter++
            : null
        );
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
        marginTop: "20px",
      }}
    >
      <Card
        title="Completion Rate (%)"
        // style={styles.card}
        bordered={true}
        style={{
          minWidth: 480,
          minHeight: 230.14,
          maxHeight: 230.14,
          textAlign: "left",
          boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
          background: "#C6FFDD",
          background: "#e5fffd",
          overflow: "hidden",
          padding: "0px !important",
          opacity: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingTop: "0px",
          }}
        >
          <Progress
            strokeWidth={9}
            type="circle"
            percent={completedPercentage(
              completedTaskCount(),
              taskCreatedToday()
            )}
            width={"100px"}
            strokeColor={
              completedPercentage(completedTaskCount(), taskCreatedToday()) >=
              80
                ? "lightGreen"
                : completedPercentage(
                    completedTaskCount(),
                    taskCreatedToday()
                  ) > 50
                ? "orange"
                : "red"
            }
            trailColor={"#9996"}
            style={{
              border: "2px solid blue",
              background: "rgba(255,255,255,0.3)",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          />
          <div
            style={{
              margin: "0px",
              textAlign: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              background: "rgb(244, 244, 244)",
              background: "#00f1",
              background: "rgba(255,255,255,0.3)",
              border: "2px solid lightgray",
            }}
          >
            <h5 style={{ textAlign: "left" }}>Tasks</h5>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <h5 style={{ paddingRight: "10px" }}>{taskCreatedToday()}</h5>
              <p>Created</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <h5 style={{ paddingRight: "10px" }}>{completedTaskCount()}</h5>
              <p>Completed</p>
            </div>
          </div>

          <div
            style={{
              margin: "0px",
              textAlign: "left",
              paddingTop: "35px",
              paddingBottom: "35px",
              paddingLeft: "10px",
              paddingRight: "10px",
              background: "rgb(244, 244, 244)",
              background: "#00f1",
              background: "rgba(255,255,255,0.3)",
              border: "2px solid lightgray",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5>Minutes worked</h5>
              {/* <p>{totalTimeWorkedOnTask()} Mins</p> */}
            </div>
          </div>
        </div>
        {/* <Button
          type={"primary"}
          style={{
            marginTop: "0px",
            float: "right",
            cursor: "pointer",
            fontSize: "14px",
            color: "#111",
            border: "rgb(244, 244, 244)",
            position: "relative",
            bottom: "237px",
            background: "rgba(0, 0, 255, 0.6)",
            color: "#f5f5f5",
            fontWeight: "bold",
          }}
            onClick={() => SetShowHide(true)}
        >
          Completed Tasks
        </Button> */}
      </Card>
    </div>
  );
}
