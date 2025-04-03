import React from "react";
import NBAContext from "../context/NBAContext";
import nbaManager from "../services/nbaAPI";
import helperManager from "../helper/Helper";
import "../pages/css/player.css";

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
    const logo = this.context.team_logo;
    const {jogos} = this.state;
    console.log(jogos);
    const stats = helperManager.lista_estatisticas_jogador(jogos);
    const {
      nome_jogador, //Jogador
      nome_time, //Time
      posicao,  //Posição
      media_pontos, //Média de Pontos
      media_assists, //Média de Assistências
      media_rebotes, //Média de Rebotes
      media_bloqueios, //Média de Bloqueios
      media_roubos, //Média de Roubos
      media_faltas, //Média de Faltas
      media_turnovers, //Média de Turnovers
      porcentagem_arremessos, //Aproveitamento de Arremessos
      media_minutos, //Média de Minutos
      porcentagem_tres_pontos, //Aproveitamento de 3 Pontos
      media_arremessos, //Média de Tentativas de Arremessos por Jogo
      media_tres_pontos, //Média de Tentativas de Arremessos de 3 Pontos por jogo
      porcentagem_lance_livre, //Aproveitamento de Lances Livres
      media_lances_livres, //Média de Lances Livres por Jogo
    } = stats;

    
    return(
        <div id="stats-player-body">
          <div className="stats-player-box">
            <div id="stats-player-title">
              <img id="stats-player-logo" src={logo} alt="Logo Clube" width='100' height='100'/>
              <h1>{nome_jogador}</h1>
            </div>
            <h2>{nome_time}</h2>
            <div>{posicao}</div>
            <div>{media_pontos}</div>
            <div>{media_assists}</div>
            <div>{media_rebotes}</div>
            <div>{media_bloqueios}</div>
            <div>{media_roubos}</div>
            <div>{media_faltas}</div>
            <div>{media_turnovers}</div>
            <div>{porcentagem_arremessos}</div>
            <div>{media_minutos}</div>
            <div>{porcentagem_tres_pontos}</div>
            <div>{media_arremessos}</div>
            <div>{media_tres_pontos}</div>
            <div>{porcentagem_lance_livre}</div>
            <div>{media_lances_livres}</div>
          </div>
        </div>
    )
  }
}
Player.contextType = NBAContext;

export default Player;