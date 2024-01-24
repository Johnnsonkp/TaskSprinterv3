import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";

import { Menu } from "antd";

function SideMenu() {
  const [defaultSelectedKey, setDefaultSelectedKey] = useState(
    window.location.pathname.toString()
  );
  const handleLinkClick = (event) => {
    window.location.assign(`/${event.target.innerText}`);
  };
  useEffect(() => {
    setDefaultSelectedKey(window.location.pathname.toString());
  }, []);
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[defaultSelectedKey]}
      selectedKeys={[defaultSelectedKey]}
      style={{
        height: "100%",
        borderRight: 5,
        textAlign: "left",
        background: `url("/header-background copy.svg")`,
      }}
      items={[
        {
          key: "/Home",
          icon: <UserOutlined style={{ fontWeight: "bold" }} />,
          label: <h4 onClick={(event) => handleLinkClick(event)}>Home</h4>,
          darkItemBg: "red",
          itemBg: "red",
        },
        {
          key: "/Main",
          icon: <LaptopOutlined />,
          label: <h4 onClick={(event) => handleLinkClick(event)}>Main</h4>,
          darkItemBg: "#333",
        },
        {
          key: "/Notes",
          icon: <NotificationOutlined />,
          label: <h4 onClick={(event) => handleLinkClick(event)}>Notes</h4>,
          disabled: true,
        },
      ]}
      border={true}
      theme={"light"}
    />
  );
}

export default SideMenu;
