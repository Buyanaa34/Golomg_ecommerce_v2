import React from "react";
import { withRouter } from "react-router-dom";
import Lottie from "react-lottie";
import * as loading from "../../../animations/69395-man-working-on-system.json";
import "./style.css";
function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    controls: false,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pagez">
      <h1 className="welcoming">Welcome to the demo_project</h1>
      <div className="home_holder">
        <div className="nvvr_pic">
          <Lottie options={defaultOptions} speed="1.6"></Lottie>
        </div>

        {/* <img className="nvvr_pic" src="/home_pic.jpg" alt="" /> */}
      </div>
    </div>
  );
}

export default withRouter(Home);
