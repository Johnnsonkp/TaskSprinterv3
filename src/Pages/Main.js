import { Button, Tabs } from "antd";
import { useEffect, useState } from "react";

import { Drawer } from "antd";
import React from "react";
import { StandUpMenu } from "../StandUp/StandUpMenu";
import TaskForm from "../Form/TaskForm";
import TaskListIndex from "../TaskList";

export default function Main({ taskArr, handleDelete, UpdateTask }) {
  const [open, setOpen] = useState(false);
  const [completedTask, setCompletedTask] = useState(
    taskArr && taskArr.filter((singleTask) => singleTask.completed === true)
  );
  const [activeTask, setActiveTask] = useState();

  useEffect(() => {
    setActiveTask(
      taskArr && taskArr.filter((singleTask) => singleTask.completed === false)
    );
    setCompletedTask(
      taskArr && taskArr.filter((singleTask) => singleTask.completed === true)
    );
  }, [taskArr]);

  const onClose = () => {
    setOpen(false);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };

  const initialItems = [
    {
      label: "All Tasks",
      children: (
        <TaskListIndex
          task={(activeTask && activeTask.concat(completedTask)) || taskArr}
          handleDelete={handleDelete}
          UpdateTask={UpdateTask}
        />
      ),
      key: "1",
    },
    {
      label: "Completed Tasks",
      children: (
        <TaskListIndex
          task={
            (completedTask && completedTask) || taskArr
            // taskArr.filter((singleTask) => singleTask.completed === true)
          }
          handleDelete={handleDelete}
          UpdateTask={UpdateTask}
        />
      ),
      key: "2",
    },
    {
      label: "Add Task",
      children: (
        <>
          <Drawer
            title={`Task Form`}
            placement="right"
            size={"large"}
            onClose={onClose}
            open={open}
          >
            <TaskForm formTitle="Add New Task" />
          </Drawer>
          <Button type="primary" onClick={showLargeDrawer}>
            Add New Task
          </Button>
        </>
      ),
      key: "3",
      closable: false,
    },
  ];
  return (
    <>
      <StandUpMenu
        taskArr={(activeTask && activeTask.concat(completedTask)) || taskArr}
      />
      <Tabs
        style={{
          borderRadius: "15px",
          padding: "10px 20px",
          backgroundColor: "#fff",
          boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
        }}
        items={initialItems}
      />
    </>
  );
}
