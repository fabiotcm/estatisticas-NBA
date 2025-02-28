import React from "react";
import ball from "../images/basketball.svg"

class Logo extends React.Component {
  render(){
    return(
    <div>
      <img src={ ball } alt="Basket Ball" width="150" height="150" />
    </div>
    )
  }
}

export default Logo;