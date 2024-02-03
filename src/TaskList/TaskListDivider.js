import React from "react";

function TaskListDivider() {
  return (
    // <span
    //   className="customDivider"
    //   style={{ marginLeft: "5px", marginRight: "5px" }}
    // ></span>

    <hr
      className="customDivider"
      style={{
        marginLeft: "15px",
        marginRight: "15px",
        height: "100%",
        border: "2px solid #fff",
        height: "35px",
      }}
    ></hr>
  );
}

export default TaskListDivider;
