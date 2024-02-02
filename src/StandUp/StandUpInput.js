import { Button } from "antd";
import React from "react";
import { styles } from "./standUp.styles";

export function DefaultInput({
  counter,
  handleChange,
  handleAddStandup,
  toggle,
  input,
}) {
  return (
    <>
      {counter <= 3 && (
        <div style={{ display: "flex", marginTop: "5px" }}>
          <input
            onChange={(event) => handleChange(event)}
            value={toggle ? "" : input}
            placeholder="What are you working on today?"
            style={{ width: "80%", padding: "5px" }}
          />
          <button
            style={{ marginLeft: "5px", cursor: "pointer", fontSize: "11px" }}
            onClick={() => handleAddStandup()}
          >
            Add Task
          </button>
        </div>
      )}
    </>
  );
}

export function StandUpInput({
  data,
  onTaskToggle,
  onTaskDelete,
  counter,
  handleChange,
  handleAddStandup,
  toggle,
  input,
}) {
  return (
    <>
      {data.map(
        (content, key) =>
          content.task && (
            <div key={key} style={styles.inputStyle}>
              <input
                type="checkbox"
                id={key}
                checked={content.toggle}
                defaultChecked={false}
                onClick={() => onTaskToggle(content)}
              />
              <label style={styles.taskContainer}>
                <p style={styles.individualTask}>
                  <p style={{ margin: "auto" }}>{counter++}. </p>
                  <span
                    style={{
                      textDecoration: content.toggle ? "line-through" : null,
                      fontSize: "13px",
                      paddingLeft: "5px",
                      paddingTop: "2px",
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
          )
      )}

      <DefaultInput
        counter={counter}
        handleChange={handleChange}
        handleAddStandup={handleAddStandup}
        toggle={toggle}
        input={input}
      />
    </>
  );
}
