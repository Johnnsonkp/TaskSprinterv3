import "./Nav.css";

import { AppLogoContainer } from "../../AppLogo/AppLogo";
import Clock from "../clock";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function Nav() {
  return (
    <span id="mainNav">
      <Header
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
        }}
      >
        <div className="demo-logo">
          <AppLogoContainer />
        </div>
        <Link to={"/"}></Link>
        {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={["1", "2", "3", "4"]}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      /> */}

        <div>
          <Clock />
        </div>
      </Header>
    </span>
  );
}
