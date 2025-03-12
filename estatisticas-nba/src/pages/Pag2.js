import React from "react";
import { Link } from "react-router-dom";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";

class Pag2 extends React.Component {
  
  componentDidMount() {
    console.log(this.lista_estatisticas_time());
    let nba = this.context;
    console.log(nba.v);
  }

  lista_estatisticas_time = async () => {
    const estatisticas = await nbaManager.estatistica_time();
    console.log(estatisticas);
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