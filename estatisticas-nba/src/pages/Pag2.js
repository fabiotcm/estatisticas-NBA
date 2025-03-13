import React from "react";
import { Link } from "react-router-dom";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";

class Pag2 extends React.Component {
  
  componentDidMount() {
    let nba = this.context;
    const response = this.lista_estatisticas_time(nba.v);
    console.log(response);
  }

  lista_estatisticas_time = async (id) => {
    const estatisticas = await nbaManager.estatistica_time(id);
    return estatisticas;
  }

  render(){
    return(
      <div>
        <Link to='/Teams'>Pag1</Link>
      </div>
    )
  }
}
Pag2.contextType = NBAContext;

export default Pag2;