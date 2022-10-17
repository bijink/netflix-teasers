import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import VideoPopUpContextProvider from "./Context/VideoPopUp.context";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
   <React.StrictMode>
      <VideoPopUpContextProvider>
         <App />
      </VideoPopUpContextProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
