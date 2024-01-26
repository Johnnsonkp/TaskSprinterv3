import "./Nav.css";

import { AppLogoContainer } from "../../AppLogo/AppLogo";
import Clock from "../clock";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function Nav() {
  return (
    <Header
      id="mainNav"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: `url("/header-background.svg")`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        borderBottom: "4px solid #573376",
        zIndex: "1000px",
        overflow: "hidden",
      }}
    >
      <div className="demo-logo">
        <AppLogoContainer />
      </div>
      <Link to={"/"}></Link>
      <div
        style={{
          border: "2px solid rgba(140, 140, 140, 0.3)",
          borderRadius: "10px",
          paddingLeft: "12px",
          paddingRight: "12px",
          height: "50px",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Clock />
      </div>
    </Header>
  );
}
