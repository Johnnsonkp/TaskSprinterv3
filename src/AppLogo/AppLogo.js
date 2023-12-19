import logo from "../logo.svg";

export const AppLogoContainer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        border: "2px solid rgba(140, 140, 140, 0.3)",
        borderRadius: "25px",
        padding: "0px 30px",
        height: "35px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 6px 12px 0px",
      }}
    >
      <img className="Custom-App-logo" style={{ width: "72px" }} src={logo} />{" "}
      <h3>TaskSprinter v3</h3>
    </div>
  );
};
