import "./App.css";

import * as React from "react";

import { useCallback, useEffect, useState } from "react";

import { DefaultContainer } from "./Containers/DefaultContainer";
import Main from "./Pages/Main";
import { defaultObj } from "./DefaultData/DefaultJSON";
import { getData } from "./Services/NotionAPI/useFetchData";
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
    setTaskArr(fetchData);
  }, []);

  const DeleteTask = (item) => {
    removeData(
      "https://tsv3-server-production.up.railway.app/archivePage",
      "put",
      item
    );
    reload();
    // setToggle(true);
  };

  const UpdateTask = (item) => {
    removeData(
      "https://tsv3-server-production.up.railway.app/updateNotionData",
      "put",
      item
    );
    // setToggle(true);
  };

  useEffect(() => {
    if (toggle) {
      reload();
      setToggle(false);
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
      <DefaultContainer
        content={<h2 style={{ textAlign: "left" }}>Main WorkSpace</h2>}
      />
      <Main
        taskArr={taskArr}
        handleDelete={DeleteTask}
        UpdateTask={UpdateTask}
      />
    </div>
  );
}

export default App;
