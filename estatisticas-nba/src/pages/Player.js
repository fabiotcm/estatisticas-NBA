import React from "react";
import NBAContext from "../context/NBAContext";

class Player extends React.Component {
  
  render() {
    const id = this.context.player_id;
    return(
        <div>
          <div>Jogador</div>
          <div>{id}</div>
        </div>
    )
  }
}
Player.contextType = NBAContext;

export default Player;