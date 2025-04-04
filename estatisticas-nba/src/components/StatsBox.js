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
    const logo = this.props.logo;
    const stats = helperManager.tratar_estatisticas_time(estatisticas);
    const {
      aproveitamento_partidas,
      colocacao,
      derrotas_totais,
      recorde_casa,
      recorde_fora,
      vitorias_totais,
    } = stats;
    return(
        <div id="stats-box">
          <div id="stats-card-box">
            <div className="logo-box" >
              {logo ? <img src={logo} alt="Logo Clube" width='400' height='400'/> : ''}
            </div>
            <div className="main-box">
              <label>Aproveitamento<div>{aproveitamento_partidas}</div></label>
              <label>Colocacao<div>{colocacao}</div></label>
              <label>Derrotas Totais<div>{derrotas_totais}</div></label>
              <label>Recorde Casa<div>{recorde_casa}</div></label>
              <label>Recorde Fora<div>{recorde_fora}</div></label>
              <label>Vitorias Totais<div>{vitorias_totais}</div></label>
            </div>
          </div>
        </div>
    )
  }
}
StatsBox.contextType = NBAContext;

export default StatsBox;