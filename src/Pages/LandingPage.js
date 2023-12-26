import { Link } from "react-router-dom";
import Nav from "../components/ui.components/Nav";
export default function LandingPage() {
  return (
    <div>
      <Nav />
      Landing page...
      <button>
        <Link to={`/main`}>click me!</Link>
      </button>
    </div>
  );
}
