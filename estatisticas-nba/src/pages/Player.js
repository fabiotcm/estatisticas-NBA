import React from "react";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";
import lista_estatisticas_jogador from "../helper/Helper";

class Player extends React.Component {

  state = {
    jogos : [],
  }

  componentDidMount() {
    this.chamar_estatistica();
  }
  
  chamar_estatistica = async () => {
    const id = this.context.player_id;
    const estatisticas_jogador = await nbaManager.estatistica_jogador(id);
    const {response} = estatisticas_jogador; 
    console.log(response);
    this.setState(() => (({
      jogos : response,
    })))
  };

  
   
  render() {
    const {jogos} = this.state;
    console.log(jogos);
    const stats = lista_estatisticas_jogador(jogos);
    console.log(stats);

    
    return(
        <div>
          <div>Jogador</div>
        </div>
    )
  }
}
Player.contextType = NBAContext;

export default Player;