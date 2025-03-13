import React from "react";
import { Link } from "react-router-dom";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";
import "../pages/css/stats.css";

class Stats extends React.Component {
  
  componentDidMount() {
    let nba = this.context;
    //const response_stats = this.lista_estatisticas_time(nba.team_id);
    //const response_players = this.lista_jogadores_time(nba.team_id);
    console.log(nba.team_logo);
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
        <div className="flex-body">
          <div id="stats-box">
            <div className="test-box" >
            </div>
            <div className="test-box-2"></div>
          </div>
        </div>
      </div>
    )
  }
}
Stats.contextType = NBAContext;

export default Stats;