import React from "react";
import ball from "../images/basketgif.gif"

class Logo extends React.Component {
  render(){
    return(
    <div>
      <img id="login-img" src={ ball } alt="Basket Ball" />
    </div>
    )
  }
}

export default Logo;