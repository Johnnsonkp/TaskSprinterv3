import { Button, Tabs } from "antd";
import { useEffect, useState } from "react";

import { DefaultContainer } from "../Containers/DefaultContainer";
import { Drawer } from "antd";
import React from "react";
import { StandUpMenu } from "../StandUp/StandUpMenu";
import TaskForm from "../Form/TaskForm";
import TaskListIndex from "../TaskList";

export default function Main({ taskArr, handleDelete, UpdateTask }) {
  const [tasksContainer, setTasksContainer] = useState();
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
            taskArr.filter((singleTask) => singleTask.completed === true) ||
            taskArr
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
      <DefaultContainer
        content={
          <StandUpMenu
            taskArr={
              (activeTask && activeTask.concat(completedTask)) || taskArr
            }
          />
        }
      />
      <DefaultContainer
        content={
          <Tabs
            style={{
              border: "2px solid lightBlue",
              borderRadius: "15px",
              padding: "0px 15px",
            }}
            items={initialItems}
          />
        }
      />
    </>
  );
}
