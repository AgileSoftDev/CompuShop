import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <div id="lp-container">
        
       
        <Link to="/home">
          <button>Ingresar</button>
        </Link>
      </div>
      
    </>
  );
}