import "./App.css";

import * as React from "react";

import { useCallback, useEffect, useState } from "react";

import { DefaultContainer } from "./Containers/DefaultContainer";
import Main from "./Pages/Main";
import { Navigate } from "react-router-dom";
import { defaultObj } from "./DefaultData/DefaultJSON";
import { getData } from "./Services/NotionAPI/useFetchData";
import { navigate } from "./Helper/navRef";
import { removeData } from "./Services/NotionAPI/useFetchData";

function App() {
  const [taskArr, setTaskArr] = useState(defaultObj);
  const [toggle, setToggle] = useState(false);

  async function loadData() {
    const fetchData = await getData(
      "https://tsv3-server-production.up.railway.app/fetchNotionData",
      "get"
    );
    setTaskArr(fetchData);
  }

  const reload = useCallback(async () => {
    console.log("toggle useCallback:", toggle);
    const fetchData = await getData(
      "https://tsv3-server-production.up.railway.app/fetchNotionData",
      "get"
    );
    console.log("fetchData useCallback:", fetchData);
    setTaskArr(fetchData);
  }, []);

  const DeleteTask = (item) => {
    removeData(
      "https://tsv3-server-production.up.railway.app/archivePage",
      "put",
      item
    );
    reload();
  };

  const UpdateTask = (item) => {
    removeData(
      "https://tsv3-server-production.up.railway.app/updateNotionData",
      "put",
      item
    );
    console.log("app.js:", item);
    setToggle(true);
  };

  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        reload();
        setToggle(false);
      }, [800]);
    }
  }, [toggle]);

  useEffect(() => {
    const controller = new AbortController();
    loadData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="App">
      <Main
        taskArr={taskArr || defaultObj}
        handleDelete={DeleteTask}
        UpdateTask={UpdateTask}
      />
    </div>
  );
}

export default App;
