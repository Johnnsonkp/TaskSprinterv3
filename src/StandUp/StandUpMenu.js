import "./standup.css";

import CompletedTaskRate from "./CompletedTaskRate";
import ProductivityCard from "./ProductivityCard";
import StandUpComponentSimplified from "./StandUpComponent";

export function StandUpMenu({ taskArr }) {
  return (
    <div
      id="standUpCardsContainer"
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "15px",
        marginBottom: "20px",
      }}
    >
      <div className="standUp-mobile" style={{ flex: 0.4 }}>
        <StandUpComponentSimplified />
      </div>
      <span className="CompletedTaskRate" style={{ flex: 0.28 }}>
        <CompletedTaskRate taskArr={taskArr} />
      </span>
      <span className="CompletedTaskRate" style={{ flex: 0.28 }}>
        <ProductivityCard taskArr={taskArr} />
      </span>
    </div>
  );
}
