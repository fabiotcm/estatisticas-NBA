import React from "react";
import { Link } from "react-router-dom";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";

class Stats extends React.Component {
  
  componentDidMount() {
    let nba = this.context;
    const response_stats = this.lista_estatisticas_time(nba.v);
    const response_players = this.lista_jogadores_time(nba.v);
    console.log(response_stats);
    console.log(response_players);
  }

  lista_estatisticas_time = async (id) => {
    const estatisticas = await nbaManager.estatistica_time(id);
    return estatisticas;
  }

  lista_jogadores_time = async (id) => {
    const jogadores = await nbaManager.jogadores_time(id);
    return jogadores;
  }

  render(){
    return(
      <div>
        <Link to='/Teams'>Voltar</Link>
      </div>
    )
  }
}
Stats.contextType = NBAContext;

export default Stats;