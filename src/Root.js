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
            {/* <Nav /> */}
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
                {/* <BreadCrumbComp /> */}
                <Content
                  style={{
                    margin: 24,
                    // margin: 0,
                    minHeight: 280,
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
