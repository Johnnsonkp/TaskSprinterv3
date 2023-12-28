import { Button, Card } from "antd";
import React, { useEffect, useRef, useState } from "react";

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
    <div>
      <Card
        title={flip ? `Daily priorities` : `Daily priorities`}
        bordered={false}
      >
        <Button
          type="primary"
          onClick={() => setWithExpiry("standup", data)}
        >{`Save Items`}</Button>
        <div>
          <div className="front" ref={frontEl}>
            {data.map((content, key) =>
              content.task ? (
                <div key={key}>
                  <input
                    type="checkbox"
                    id={key}
                    checked={content.toggle}
                    onClick={() => onTaskToggle(content)}
                  />
                  <label>
                    <p>
                      <div>{counter++}. </div>
                      <span
                        style={{
                          textDecoration: content.toggle
                            ? "line-through"
                            : null,
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
                />
                <button onClick={() => handleAddStandup()}>Add Task</button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StandUpComponentSimplified;
