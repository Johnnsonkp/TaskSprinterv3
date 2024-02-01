import { Button, Card } from "antd";
import React, { useRef, useState } from "react";

import { StandUpInput } from "./StandUpInput";
import { styles } from "./standUp.styles";

const StandUpComponentSimplified = () => {
  const initialText = { task: "What are you working on today?", toggle: false };
  const standUpLocalStorage = JSON.parse(
    window.localStorage.getItem("standup")
  ) || { value: [] };

  const [data, setData] = useState(
    standUpLocalStorage.value.filter((item) => item !== initialText) || [
      initialText.task,
    ]
  );
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const [flip, setFlip] = useState(false);
  const frontEl = useRef();
  let counter = 1;

  const handleAddStandup = () => {
    const newData = data.filter((content) => content !== initialText.task);
    setData([...newData, { task: input, toggle: false }]);
    setToggle(true);
  };

  const handleChange = (event) => {
    setToggle(false);
    setInput(event.target.value);
  };

  const onTaskDelete = (task) => {
    setData(data.filter((oldData) => oldData !== task));
  };

  const onTaskToggle = (task) => {
    const newData = data.map((oldData) =>
      oldData.task === task.task
        ? { ...oldData, toggle: !oldData.toggle }
        : oldData
    );
    setData(newData);
  };

  const setWithExpiry = (key, value) => {
    const item = { value };
    localStorage.setItem(key, JSON.stringify(item));
    alert("Stand up saved");
  };

  return (
    <Card
      className="priorities-card"
      title={flip ? `Daily Priorities (Max 3)` : `Daily Priorities (Max 3)`}
      bordered={false}
      style={{
        minWidth: 390,
        width: 470,
        minHeight: 210.14,
        maxHeight: 210.14,
        textAlign: "left",
        boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
        background: "#7F7FD5" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to bottom, #91EAE4, #86A8E7, #7F7FD5)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to bottom, #91EAE4, #86A8E7, #7F7FD5)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <Button
        style={styles.button}
        type="primary"
        onClick={() => setWithExpiry("standup", data)}
      >{`Save Items`}</Button>
      <div
        className="front"
        ref={frontEl}
        style={{
          width: "100%",
          margin: "auto",
          position: "relative",
          top: "-45px",
        }}
      >
        <StandUpInput
          data={data}
          onTaskDelete={onTaskDelete}
          onTaskToggle={onTaskToggle}
          counter={counter}
          handleChange={handleChange}
          handleAddStandup={handleAddStandup}
          toggle={toggle}
          input={input}
        />
      </div>
    </Card>
  );
};

export default StandUpComponentSimplified;
