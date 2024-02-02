import "./standup.css";

import CompletedTaskRate from "./CompletedTaskRate";
import ProductivityCard from "./ProductivityCard";
import StandUpComponentSimplified from "./StandUpComponent";

export function StandUpMenu({ taskArr }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "15px",
        marginBottom: "20px",
      }}
    >
      <StandUpComponentSimplified />
      <span className="CompletedTaskRate">
        <CompletedTaskRate taskArr={taskArr} />
      </span>
      <span className="CompletedTaskRate">
        <ProductivityCard taskArr={taskArr} />
      </span>
    </div>
  );
}
