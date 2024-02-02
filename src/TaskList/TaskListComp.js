import "./index.css";

import {
  CheckCircleOutlined,
  CloseSquareOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Drawer, Popconfirm } from "antd";
import { useEffect, useState } from "react";

import DefaultForm from "../Form/DefaultForm";
import { List } from "antd";
import LoadSpiner from "../components/ui.components/loadSpiner/loadSpiner";
import React from "react";
import StatusTab from "../components/ui.components/StatusTab";
import TaskListDate from "./TaskListDate";
import TaskListDivider from "./TaskListDivider";
import TaskListTitle from "./TaskListTitle";

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

  const CustomSideDrawer = () => {
    return (
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
    );
  };

  const TaskListComp = () => {
    return (
      <div
        id="taskliskContainer"
        style={{
          textAlign: "left",
        }}
      >
        <CustomSideDrawer />
        <List
          className="taskListWrapper"
          pagination={{
            position: "bottom",
            pageSize: 10,
            size: "small",
          }}
          dataSource={allTasksArr}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              className="taskList"
              style={{
                backgroundColor: item.completed
                  ? "rgba(200,255,221,0.3)"
                  : "#f4f4f4",
                margin: "2px",
                padding: "3px 10px",
                borderLeft: `5px solid ${
                  item.completed ? "rgba(103, 245, 149, 1)" : "#1890ff70"
                }`,
              }}
              actions={[
                <Popconfirm
                  title={"Are you sure you want to delete?"}
                  onConfirm={() => onTaskDelete(item)}
                >
                  <CloseSquareOutlined className="closeSquareOutlined" />
                </Popconfirm>,
              ]}
            >
              <TaskListTitle
                item={item}
                TaskCompleteClicked={TaskCompleteClicked}
              />
              {item.subtasks && <MessageOutlined className="customDivider" />}
              <span style={{ width: "10px" }}></span>
              <button
                className="expandBtn"
                style={{ cursor: "pointer" }}
                onClick={() => selectedTask(item)}
              >
                Expand
              </button>
              <TaskListDivider />
              <StatusTab style={{ background: "transparent" }} />
              <TaskListDivider />
              <TaskListDate item={item} />
              <TaskListDivider />
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
