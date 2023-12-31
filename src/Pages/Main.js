import { Button, Radio, Tabs } from "antd";
import { useEffect, useState } from "react";

import { BASE_URL } from "../Helper/environment";
import { DefaultContainer } from "../Containers/DefaultContainer";
import { Drawer } from "antd";
import React from "react";
import StandUpComponent from "../StandUp/StandUpComp";
import StandUpComponentSimplified from "../StandUp/StandUpComponent";
import { StandUpMenu } from "../StandUp/StandUpMenu";
import TaskForm from "../Form/TaskForm";
import TaskListIndex from "../TaskList";
import { defaultObj } from "../DefaultData/DefaultJSON";
import { getData } from "../Services/NotionAPI/useFetchData";

export default function Main({ taskArr, handleDelete, UpdateTask }) {
  const [tasksContainer, setTasksContainer] = useState();
  const [open, setOpen] = useState(false);
  const [completedTask, setCompletedTask] = useState();

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
          task={taskArr}
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
          task={taskArr.filter((singleTask) => singleTask.completed === true)}
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
      <DefaultContainer content={<StandUpMenu />} />
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
