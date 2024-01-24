import "./index.css";

import { Button } from "antd";
import { DefaultContainer } from "../Containers/DefaultContainer";
import { Link } from "react-router-dom";
import Nav from "../components/ui.components/Nav";

export default function LandingPage() {
  return (
    <>
      <div>
        <Nav style={{ zIndex: "9000" }} />
        <div id="landingPage-still">
          <div className="left">
            <DefaultContainer
              content={
                <div
                  style={{
                    width: "100%",
                    marginBottom: "0px",
                  }}
                >
                  <h2>Elevate Your Productivity</h2>
                  <p>
                    The new era of task management were the synergy of React,
                    Notion, and OpenAI converges to redefine your productivity
                    journey.
                  </p>
                  <Button className="mobile-view">
                    <Link to={`/main`}>Start a New Project!</Link>
                  </Button>
                </div>
              }
            />
          </div>

          <div className="right landing-grid-svg-image">
            <img
              className="landing-page-image"
              src="/landing-black.png"
              alt="landing page"
            />
          </div>
        </div>
      </div>
      <div className="logoContainer">
        <img src="/reactLogo.svg" className="logo" alt="reactLogo" />
        <img src="/nodejs-icon.svg" alt="nodeLogo" />
        <img src="/netlify-ar21.svg" className="logo" alt="netlifyLogo" />
        <img src="/notion-logo-1.svg" className="logo" alt="notionLogo" />
        <img
          src="/railwayapp-logo-dark.svg"
          className="logo"
          alt="railwayapp Logo"
        />
      </div>
    </>
  );
}
