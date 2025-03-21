import React from "react";
import { Link } from "react-router-dom";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";
import "../pages/css/stats.css";
import StatsBox from "../components/StatsBox";

class Stats extends React.Component {

  state = {
    logo: false,
  }

  componentDidMount() {
    let nba = this.context; 
    this.setState(()=>({
      logo: nba.team_logo,
    }));
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
    const { logo } = this.state;
    return(
      <div>
        <Link to='/Teams'>Voltar</Link>
        <div className="flex-body">
          <StatsBox logo={ logo }/>
        </div>
      </div>
    )
  }
}
Stats.contextType = NBAContext;

export default Stats;