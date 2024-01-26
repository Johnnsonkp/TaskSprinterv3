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
    window.location.pathname.toString()
  );
  const [loaded, setLoaded] = useState(false);

  const handleLinkClick = (event) => {
    // window.location.assign(`/${event.target.innerText}`);
    setDefaultSelectedKey(window.location.pathname.toString());
  };
  setTimeout(() => {
    console.log("setTimeout", window.location.pathname.toString());
    setLoaded(true);
  }, [3000]);

  useEffect(() => {
    console.log("useFfect selected key", window.location.pathname.toString());
    setDefaultSelectedKey(window.location.pathname.toString());
  }, [loaded]);
  return (
    <Menu
      id="sideMenu"
      mode="inline"
      selectedKeys={defaultSelectedKey}
      style={{
        height: "100%",
        borderRight: 0,
        textAlign: "left",
        background: `url("/header-background copy.svg")`,
      }}
      items={[
        {
          key: "/home",
          icon: <UserOutlined size="large" />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/home">Home</Link>
            </h4>
          ),
        },
        {
          key: "/dashboard",
          icon: <LaptopOutlined />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/dashboard">Dashboard</Link>
            </h4>
          ),
        },
        {
          key: "/notes",
          icon: <NotificationOutlined />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/notes">Notes</Link>
            </h4>
          ),
        },
        {
          key: "/notion",
          icon: <UserOutlined size="large" />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/notion">Notion</Link>
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
