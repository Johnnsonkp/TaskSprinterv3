// import "./Apps";

import { Button } from "antd";
import { DefaultContainer } from "../Containers/DefaultContainer";
import { Link } from "react-router-dom";
import Nav from "../components/ui.components/Nav";
export default function LandingPage() {
  return (
    <div>
      <Nav style={{ zIndex: "9000" }} />
      <div id="landingPage-still">
        <div className="left">
          <DefaultContainer
            content={
              <>
                <h1>Elevate Your Productivity</h1>
                <p>
                  Enter the new era of task management where the synergy of
                  React, Notion, and OpenAI converges to redefine your
                  productivity journey.
                </p>
              </>
            }
          />
          <DefaultContainer
            content={
              <Button>
                <Link to={`/main`}>Start a New Project!</Link>
              </Button>
            }
          />
        </div>

        <div className="right" id="LandingPageTaskPageImage">
          <img className="landing-grid-svg-image" src="/grid--dark.svg" />
        </div>
      </div>
    </div>
  );
}
