import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MovingShapes from "./component/MovingShapes";
import skc from "./assert/skc.svg";
import snow from "./assert/snow.svg";
import night from "./assert/night.svg";
import {Background} from "./styledComponents";


ReactDOM.render(
  <React.StrictMode>
    <Background>
      <MovingShapes 
        sWidth="500px" 
        sSrc={skc} 
        sSpeed="38s" 
        sLeft="-150px" 
      />
      <MovingShapes
        sWidth="150px"
        sSrc={snow}
        sSpeed="15s"
        sLeft="calc(100% - 200px)"
        sTop="calc(100% - 100px)"
      />
      <MovingShapes
        sWidth="100px"
        sSrc={night}
        sSpeed="35s"
        sLeft="calc(100% - 80px)"
        sTop="200px"
      />
    </Background>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
