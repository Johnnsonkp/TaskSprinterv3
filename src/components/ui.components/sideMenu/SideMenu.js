import "./SideMenu.css";

import {
  DashboardFilled,
  DatabaseFilled,
  LaptopOutlined,
  NotificationOutlined,
  PaperClipOutlined,
  UserAddOutlined,
  UserFilled,
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
    setDefaultSelectedKey(window.location.pathname.toString());
  };
  setTimeout(() => {
    setLoaded(true);
  }, [3000]);

  useEffect(() => {
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
        boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
      }}
      items={[
        {
          key: "/home",
          icon: <UserAddOutlined size="large" />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/home">Home</Link>
            </h4>
          ),
        },
        {
          key: "/dashboard",
          icon: <DashboardFilled />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/dashboard">Dashboard</Link>
            </h4>
          ),
        },
        {
          key: "/notes",
          icon: <PaperClipOutlined />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/notes">Notes</Link>
            </h4>
          ),
        },
        {
          key: "/notion-db",
          icon: <DatabaseFilled size="large" />,
          label: (
            <h4 onClick={(event) => handleLinkClick(event)}>
              <Link to="/notion-db">Notion Database</Link>
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
