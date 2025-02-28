import React from "react";
import ball from "../images/basketball.jpg"

class Logo extends React.Component {
  render(){
    return(
    <div>
      <img src={ ball } alt="Basket Ball" />
    </div>
    )
  }
}

export default Logo;