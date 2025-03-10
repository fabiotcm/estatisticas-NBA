import React from "react";
import basketLoading from "../images/basketball-removebg.png";
import "../pages/css/loading.css"

class Loading extends React.Component {
  render(){
    return(
    <div className="loading-box">
      <img id="loading" src={ basketLoading } alt="basketball loading" width="150" height="150" />
    </div>
    )
  }
}

export default Loading;