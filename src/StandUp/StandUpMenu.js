import "./standup.css";

import CompletedTaskRate from "./CompletedTaskRate";
import StandUpComponentSimplified from "./StandUpComponent";

export function StandUpMenu({ taskArr }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "2px solid lightblue",
        borderRadius: "15px",
        padding: "0px 10px",
        paddingBottom: "15px",
        background: `url("/header-background copy.svg")`,
      }}
    >
      <span className="standupSimplified">
        <StandUpComponentSimplified />
      </span>
      <span className="CompletedTaskRate">
        <CompletedTaskRate taskArr={taskArr} />
      </span>
    </div>
  );
}
