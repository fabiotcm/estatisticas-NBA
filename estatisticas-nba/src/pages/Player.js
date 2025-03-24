import React from "react";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";

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
      points : response,
    })))
  };

  lista_estatisticas_jogador = (jogos) => {
    const numJogos = jogos.lenght;
    const total_pontos = 0;
    total_pontos = jogos.forEach(jogo => {
      total_pontos = media_pontos + jogo.points;
    });
    const media_pontos = total_pontos / numJogos;
    return media_pontos;
  }
   
  render() {
    
    return(
        <div>
          <div>Jogador</div>
          <div>{id}</div>
        </div>
    )
  }
}
Player.contextType = NBAContext;

export default Player;