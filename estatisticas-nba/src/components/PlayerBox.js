import React from "react";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";
import { Navigate } from "react-router-dom";

class PlayerBox extends React.Component{
  state = {
    lista_jogadores : [],
    to_player : false,
  };

  componentDidMount(){
    this.lista_jogadores_time();
  }

  lista_jogadores_time = async () => {
    const id = this.context.team_id;
    const jogadores = await nbaManager.jogadores_time(id);
    const {response} = jogadores;
    this.setState(() => (({
      lista_jogadores : response,
    })));
    
  }

  go_to_player = (id) =>{
    this.context.mudarPlayerId(id);
    this.setState(() =>(({
      to_player : true,
    })));
  }

  render(){
    const {lista_jogadores, to_player} = this.state;
    console.log(lista_jogadores);
    const array_jogadores = lista_jogadores.map((jogador) =>{
      return(
        <div id="player-card" key={jogador.id} onClick={() => this.go_to_player(jogador.id)}>
          <div>{jogador.firstname}</div>
          <div>{jogador.lastname}</div>
        </div>
      )
    });
    
    if(to_player) return(<Navigate to='/Player'/>)
    
    return(
      <div id="player-card-box">{array_jogadores}</div>
    )
  }

}
PlayerBox.contextType = NBAContext;

export default PlayerBox;