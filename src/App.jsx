import { Image } from "react-bootstrap";
import "./index.css";
import Portfolio from "./Portfolio.jsx";
import TechStack from "./TechStack.jsx";
import Angazmani from "./Angazmani.jsx";
import Timeline from "./Timeline.jsx";


const App = () => {
  return (
    <>
      <div className="divMain">
        <Image src="https://majalojo.net/Maja.png" fluid className="imgMain" />
        <div className="divHeading">
          <h1 className="heading">Maja Lojo</h1>
        </div>
        <div>
          <Timeline />
        </div>
        <div>
          <TechStack />
        </div>
        <div>
          <Angazmani />
        </div>

        <div>
          <Portfolio />
        </div>
      </div>
    </>

  )

}
export default App;