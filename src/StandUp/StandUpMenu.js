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
        padding: "15px 10px",
        background: `url("/header-background copy.svg")`,
      }}
    >
      <StandUpComponentSimplified />
      <StandUpComponentSimplified />
    </div>
  );
}
