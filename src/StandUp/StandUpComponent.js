import { Button, Card } from "antd";
import React, { useRef, useState } from "react";

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
    // <div className="standup-card" style={styles.container}>
    <Card
      className="priorities-card"
      title={flip ? `Daily Priorities (Max 3)` : `Daily Priorities (Max 3)`}
      bordered={true}
      style={{
        minWidth: 390,
        width: 470,
        minHeight: 210.14,
        maxHeight: 210.14,
        textAlign: "left",
        boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
        background: "#C6FFDD",
        background: "#e5fffd",
        // background: "#fff",
      }}
    >
      <Button
        style={styles.button}
        type="primary"
        onClick={() => setWithExpiry("standup", data)}
      >{`Save Items`}</Button>
      <div>
        <div
          className="front"
          ref={frontEl}
          style={{
            width: "100%",
            margin: "auto",
            position: "relative",
            top: "-75px",
          }}
        >
          {data.map((content, key) =>
            content.task ? (
              <div key={key} style={styles.inputStyle}>
                <input
                  type="checkbox"
                  id={key}
                  checked={content.toggle}
                  onClick={() => onTaskToggle(content)}
                />
                <label style={styles.taskContainer}>
                  <p style={styles.individualTask}>
                    <div>{counter++}. </div>
                    <span
                      style={{
                        textDecoration: content.toggle ? "line-through" : null,
                        fontSize: "14px",
                      }}
                    >
                      {content.task}
                    </span>
                  </p>
                  <Button
                    onClick={() => onTaskDelete(content)}
                    type="primary"
                    danger
                    style={{
                      padding: "4px 7px",
                      margin: "2px",
                      height: "30px",
                    }}
                  >
                    X
                  </Button>
                </label>
              </div>
            ) : (
              <h4 key={key}>{`What are you working on today?`}</h4>
            )
          )}
          {counter <= 3 && (
            <div>
              <input
                onChange={(event) => handleChange(event)}
                value={toggle ? "" : input}
                placeholder="What are you working on today?"
                style={{ width: "80%", padding: "5px" }}
              />
              <button
                style={{ marginLeft: "5px", cursor: "pointer" }}
                onClick={() => handleAddStandup()}
              >
                Add Task
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
    // </div>
  );
};

export default StandUpComponentSimplified;
