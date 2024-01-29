import "./App.css";

import BreadCrumbComp from "./components/ui.components/BreadCrumb";
import { Layout } from "antd";
import LoadSpiner from "./components/ui.components/loadSpiner/loadSpiner";
import Nav from "./components/ui.components/Nav";
import React from "react";
import SideMenu from "./components/ui.components/sideMenu/SideMenu";

const { Content, Sider } = Layout;

function PageBoilerPlate({ component }) {
  const CustomLayout = () => {
    return (
      <>
        <Nav />
        <div className="App">
          <Layout>
            <Layout>
              <Sider
                className="sider"
                width={260}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <SideMenu />
              </Sider>
              <Layout
                className="boilerplate-layout"
                style={{
                  padding: "0 4px 0px",
                }}
              >
                <Content
                  id={"content"}
                  style={{
                    margin: 24,
                    minHeight: 280,
                    height: "100%",
                    backgroundColor: "#f4f4f4",
                    borderRadius: "15px",
                  }}
                >
                  <BreadCrumbComp />
                  {component}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </>
    );
  };
  return component ? <CustomLayout /> : <LoadSpiner />;
}

export default PageBoilerPlate;
