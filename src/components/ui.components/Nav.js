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
        // background: 'url("/pink-nav-background.svg',
        // backgroundColor: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        borderBottom: "4px solid #573376",
        // borderBottom: "4px solid rgb(49, 109, 232)",
        zIndex: "1000px",
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
