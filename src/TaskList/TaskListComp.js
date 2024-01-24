import "./index.css";

import { Button, Collapse, Divider, Drawer, Space } from "antd";
import {
  CheckCircleOutlined,
  CloseSquareOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import CustomDivider from "../components/ui.components/CustomDivider";
import DefaultForm from "../Form/DefaultForm";
import { InputNumber } from "antd";
import { List } from "antd";
import LoadSpiner from "../components/ui.components/loadSpiner/loadSpiner";
import React from "react";
import StatusTab from "../components/ui.components/StatusTab";
import { reformatDate } from "../Helper/DateFormat";

const onChange = (value) => {
  console.log("changed", value);
};

export default function TaskListComp({ task, handleDelete, UpdateTask }) {
  const [open, setOpen] = useState(false);
  const [selectTask, setSelectTask] = useState();
  const [taskReloaded, setTaskReloaded] = useState();
  const [completedTasks, setCompletedTasks] = useState();
  const [allTasksArr, setAllTaskArr] = useState();

  const onClose = () => {
    setOpen(false);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };
  function selectedTask(task) {
    setSelectTask(task);
  }

  function constructTaskListArr() {
    let arr = [];
    task.forEach((singleTask, index) => {
      arr.push({
        key: index,
        name: singleTask.name,
        subtasks: singleTask.subtasks,
        date: singleTask.date || singleTask.date_created,
        completed: singleTask.completed,
        page_id: singleTask.page_id,
      });
    });
    setCompletedTasks(arr.filter((task) => task.completed === true));
    setTaskReloaded(arr.filter((task) => task.completed === false));
    setAllTaskArr(taskReloaded && taskReloaded.concat(completedTasks));
  }

  async function TaskCompleteClicked(item) {
    item.completed = !item.completed;
    allTasksArr.forEach((task) => {
      if (item.page_id === task.page_id) {
        task.completed = item.completed;
        setCompletedTasks(
          allTasksArr.filter((task) => task.completed === true)
        );
        const removedCompletedTaskFromArr = allTasksArr.filter(
          (task) => task.page_id !== item.page_id
        );
        setTaskReloaded(removedCompletedTaskFromArr);
      }
    });
    await UpdateTask(item);
  }
  const onTaskDelete = (item) => {
    setAllTaskArr(allTasksArr.filter((task) => task.page_id !== item.page_id));
    handleDelete(item);
  };

  useEffect(() => {
    if (selectTask) {
      showLargeDrawer();
    }
  }, [selectTask]);

  useEffect(() => {
    constructTaskListArr();
  }, [task]);

  const TaskListComp = () => {
    return (
      <div
        id="taskliskContainer"
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
            <DefaultForm
              formTitle={"Update Task"}
              task={selectTask}
              UpdateTask={UpdateTask}
            />
          ) : null}
        </Drawer>
        <List
          style={{
            cursor: "pointer",
            border: "1px solid red",
            border: "1px solid rgba(5, 5, 5, 0.06)",
            borderRadius: "10px",
            padding: "5px",
            overflow: "visible",
          }}
          dataSource={allTasksArr}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              className="taskList"
              style={{
                backgroundColor: item.completed
                  ? "rgba(0, 200, 117, 0.1)"
                  : "rgba(140, 140, 140, 0.15)",
                margin: "2px",
                borderRadius: "5px",
                padding: "3px 10px",
                borderLeft: `5px solid ${
                  item.completed ? "rgba(103, 245, 149, 1)" : "#1890ff70"
                }`,
              }}
            >
              <List.Item.Meta
                style={{
                  textAlign: "left",
                  flex: 2.3,
                  // border: "1px solid red",
                  display: "flex",
                  alignItems: "center",
                }}
                avatar={
                  <span style={{ display: "flex" }}>
                    <CheckCircleOutlined
                      style={{
                        color: item.completed
                          ? "rgba(103, 245, 149, 1)"
                          : "#1890ff70",
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
                      onChange={onChange}
                      size={"small"}
                      width={"2px"}
                      style={{
                        width: "40px",
                        background: "transparent",
                        marginRight: "5px",
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
              {/* <span className="customDivider">
                <CustomDivider className="customDivider" />
              </span> */}
              {item.subtasks && <MessageOutlined className="customDivider" />}
              <span style={{ width: "10px" }}></span>
              <button
                className="expandBtn"
                style={{ cursor: "pointer" }}
                onClick={() => selectedTask(item)}
              >
                Expand
              </button>
              <span
                className="customDivider"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                {/* <CustomDivider className="customDivider" /> */}
              </span>
              <span
                className="statusTab"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                <StatusTab style={{ background: "transparent" }} />
              </span>
              <span
                className="customDivider"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                {/* <CustomDivider className="customDivider" /> */}
              </span>
              <List.Item.Meta
                className="tasklistDate"
                style={{}}
                title={
                  item.date.start && (
                    <button
                      style={{
                        border: "1px solid lightGray",
                        minWidth: "180px",
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
                        Due:{" "}
                        {reformatDate(item.date.start, "dd/MM - h:mm bbbb")}{" "}
                      </a>
                    </button>
                  )
                }
              />
              <span
                className="customDivider"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                {/* <CustomDivider className="customDivider" /> */}
              </span>
              <CloseSquareOutlined
                className="CloseSquareOutlined"
                style={{
                  color: "red",
                  fontSize: "25px",
                  cursor: "pointer",
                  border: "1px solid red",
                }}
                onClick={() => onTaskDelete(item)}
              />
            </List.Item>
          )}
        />
      </div>
    );
  };

  {
    return task ? <TaskListComp /> : <LoadSpiner />;
  }
}
