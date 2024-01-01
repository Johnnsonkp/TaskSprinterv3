import CompletedTaskRate from "./CompletedTaskRate";
import StandUpComponentSimplified from "./StandUpComponent";
export function StandUpMenu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        // border: "1px solid red",
        border: "2px solid lightblue",
        borderRadius: "15px",
        padding: "0px 10px",
        paddingBottom: "15px",
        background: `url("/header-background copy.svg")`,
      }}
    >
      <StandUpComponentSimplified />
      <CompletedTaskRate />
    </div>
  );
}
