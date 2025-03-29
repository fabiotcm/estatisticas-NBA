import React from "react";
import nbaManager from "../services/nbaAPI";
import NBAContext from "../context/NBAContext";
import helperManager from "../helper/Helper";

class StatsBox extends React.Component {

  state = {
    estatisticas: [],
  };

  componentDidMount() {
    const id = this.context.team_id;
    this.lista_estatisticas_time(id);
  }

  lista_estatisticas_time = async (id) => {
    const estatisticas = await nbaManager.estatistica_time(id);
    const { response } = estatisticas;
    this.setState(()=>({
        estatisticas: response,
    }));
    
  }

  render() {
    const { estatisticas } = this.state;
    console.log(estatisticas);
    const stats = helperManager.tratar_estatisticas_time(estatisticas);
    console.log(stats);
    const logo = this.props.logo;
    return(
        <div id="stats-box">
          <div id="stats-card-box">
            <div className="logo-box" >
              {logo ? <img src={logo} alt="Logo Clube" width='400' height='400'/> : ''}
            </div>
            <div className="test-box-2"></div>
          </div>
        </div>
    )
  }
}
StatsBox.contextType = NBAContext;

export default StatsBox;