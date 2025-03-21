import React from "react";
import { Link } from "react-router-dom";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";
import "../pages/css/stats.css";
import StatsBox from "../components/StatsBox";
import PlayerBox from "../components/PlayerBox";

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

  render(){
    const { logo } = this.state;
    return(
      <div>
        <Link to='/Teams'>Voltar</Link>
        <div className="flex-body">
          <StatsBox logo={ logo }/>
          <PlayerBox/>
        </div>
      </div>
    )
  }
}
Stats.contextType = NBAContext;

export default Stats;