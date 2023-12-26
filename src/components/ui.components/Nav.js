import { AppLogoContainer } from "../../AppLogo/AppLogo";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function Nav() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: `url("/header-background.svg")`,
        backhroundPosition: "top center",
        borderBottom: "4px solid #573376",
      }}
    >
      <div className="demo-logo" />
      <AppLogoContainer />
      <Link to={"/"}></Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={["1", "2", "3", "4"]}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
}
