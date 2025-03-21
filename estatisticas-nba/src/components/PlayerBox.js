import React from "react";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";

class PlayerBox extends React.Component{

  lista_jogadores_time = async (id) => {
    const jogadores = await nbaManager.jogadores_time(id);
    return jogadores;
  }

  render(){
    const id = this.context.team_id;
    const lista_jogadores = this.lista_jogadores_time(id);
    console.log(lista_jogadores)
    return(
      <div>{id}</div>
    )
  }

}
PlayerBox.contextType = NBAContext;

export default PlayerBox;