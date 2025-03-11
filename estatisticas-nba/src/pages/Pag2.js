import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";

class Pag2 extends React.Component {
  
  componentDidMount() {
    console.log(this.lista_estatisticas_time());
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