import "./App.css";

import * as React from "react";

import { useCallback, useEffect, useState } from "react";

import LoadSpiner from "./components/ui.components/loadSpiner/loadSpiner";
import Main from "./Pages/Main";
import { getData } from "./Services/NotionAPI/useFetchData";
import { removeData } from "./Services/NotionAPI/useFetchData";

function App() {
  const [taskArr, setTaskArr] = useState();
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
  };

  const UpdateTask = (item) => {
    removeData(
      "https://tsv3-server-production.up.railway.app/updateNotionData",
      "put",
      item
    );
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
      {taskArr ? (
        <Main
          taskArr={taskArr}
          handleDelete={DeleteTask}
          UpdateTask={UpdateTask}
        />
      ) : (
        <LoadSpiner />
      )}
    </div>
  );
}

export default App;
