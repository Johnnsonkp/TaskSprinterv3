import "./SideMenu.css";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Menu } from "antd";

function SideMenu() {
  const [defaultSelectedKey, setDefaultSelectedKey] = useState(
    window.location.pathname.toString() || "Dashboard"
  );
  const handleLinkClick = (event) => {
    // window.location.assign(`/${event.target.innerText}`);
    setDefaultSelectedKey(window.location.pathname.toString());
  };
  useEffect(() => {
    setDefaultSelectedKey(window.location.pathname.toString());
  }, [defaultSelectedKey]);
  return (
    <Menu
      id="sideMenu"
      mode="inline"
      defaultSelectedKeys={[defaultSelectedKey]}
      selectedKeys={[defaultSelectedKey]}
      style={{
        height: "100%",
        borderRight: 0,
        textAlign: "left",
        background: `url("/header-background copy.svg")`,
        // backgroundColor: "#e5e6e6",
      }}
      items={[
        {
          key: "/Home",
          icon: <UserOutlined size="large" />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/Home">Home</Link>
            </h4>
          ),
        },
        {
          key: "/Dashboard",
          icon: <LaptopOutlined />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/Dashboard">Dashboard</Link>
            </h4>
          ),
        },
        {
          key: "/Notes",
          icon: <NotificationOutlined />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/Notes">Notes</Link>
            </h4>
          ),
        },
      ]}
      border={"true"}
      theme={"light"}
    />
  );
}

export default SideMenu;
