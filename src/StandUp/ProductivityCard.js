import { Button, Card, Progress } from "antd";
import React, { useEffect, useRef } from "react";

import { reformatDate } from "../Helper/DateFormat";
import { styles } from "./standUp.styles";

const customStyles = { styles };

export default function ProductivityCard({ taskArr }) {
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
    // id="completed"
    // style={{
    //   background: "rgb(198, 255, 221)",
    //   marginTop: "0px",
    //   backgroundImage: `url("/public/do-more.jpg")`,
    //   backgroundPosition: "center center",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <Card
        // title="Completion Rate (%)"
        // style={styles.card}
        bordered={true}
        style={{
          minWidth: 480,
          minWidth: 300,
          minHeight: 210.14,
          maxHeight: 210.14,
          textAlign: "left",
          boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
          background: "#C6FFDD",
          backgroundColor: "#111",
          backgroundImage: `url("/do-more-2.jpg")`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          padding: "0px !important",
          // opacity: 0.8,
          color: "#fff !important",
        }}
      >
        <div
        // style={{
        //   boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
        //   // background: "#C6FFDD",
        //   backgroundImage: `url("/do-more.jpg")`,
        //   backgroundPosition: "center center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   overflow: "hidden",
        //   padding: "0px !important",
        //   opacity: 1,
        // }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // alignItems: "flex-start",
              justifyContent: "space-between",
              marginTop: "0px",
              background: "transparent",
            }}
          >
            {/* <Progress
              strokeWidth={9}
              type="circle"
              color="#fff"
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
                background: "rgba(255,255,255,0.3)",
                background: "transparent",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  border: "1px solid lightGray",
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  marginBottom: "5px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  padding: "6px",
                }}
              >
                <p style={{ marginTop: "0px", margin: "0px" }}>
                  Task Created:{" "}
                </p>
                <p
                  style={{
                    paddingLeftt: "0px",
                    marginTop: "0px",
                    margin: "0px",
                    textAlign: "right",
                  }}
                >
                  {taskCreatedToday()}
                </p>
              </div> */}
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px",
                  border: "1px solid lightGray",
                  backgroundColor: "#fff",
                  marginTop: "5px",
                  borderRadius: "15px",
                  padding: "3px",
                  padding: "6px",
                }}
              >
                <p style={{ margin: "0px" }}>Task Completed: </p>
                <p style={{ paddingRight: "0px", margin: "0px" }}>
                  {completedTaskCount()}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
