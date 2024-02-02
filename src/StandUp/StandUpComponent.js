import { Button, Card } from "antd";
import React, { useState } from "react";

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
    localStorage.removeItem("standup");
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

  const ButtonConstruct = () => {
    {
      return data && data.length === 3 && localStorage.getItem("standup") ? (
        <div style={{ marginTop: "50px" }}></div>
      ) : (
        <Button
          style={styles.button}
          type="primary"
          onClick={() => setWithExpiry("standup", data)}
        >{`Save Items`}</Button>
      );
    }
  };

  return (
    <Card
      className="priorities-card"
      title={`Daily Priorities x3`}
      bordered={false}
    >
      <ButtonConstruct />
      <div className="inner-card-container">
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
