import "./index.css";

import { Button } from "antd";
import { DefaultContainer } from "../Containers/DefaultContainer";
import { Link } from "react-router-dom";
import Nav from "../components/ui.components/Nav";
import TypeWriterEffect from "../components/typewriter-effect/TypeWriterEffect";

export default function LandingPage() {
  return (
    <>
      <div>
        <Nav style={{ zIndex: "9000" }} />
        <div
          id="landingPage-still"
          className="flex justify-center align-middle w-[100%]"
        >
          <div className="left">
            <DefaultContainer
              content={
                <div
                  style={{
                    width: "100%",
                    marginBottom: "0px",
                  }}
                >
                  <h2>
                    Elevate Your{" "}
                    <TypeWriterEffect
                      text="Productivity"
                      delay={180}
                      infinite
                    />{" "}
                    {/* Elevate Your Productivity */}
                  </h2>
                  <p>
                    The new era of task management were the synergy of React,
                    Notion, and OpenAI converges to redefine your productivity
                    journey.
                  </p>
                  <Button className="mobile-view">
                    <Link to={`/dashboard`}>Start a New Project!</Link>
                  </Button>
                </div>
              }
            />
          </div>

          <div className="right landing-grid-svg-image">
            {/* <div className=""> */}
            <img
              className="landing-page-image border border-solid border-2-orange"
              // className="border border-solid border-2-orange w-1 h-1"
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
// boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
