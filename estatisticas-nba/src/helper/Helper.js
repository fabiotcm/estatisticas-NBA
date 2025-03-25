const lista_estatisticas_jogador = (jogos) => {
  const numJogos = jogos.length;
  var total_pontos = 0;
  var total_assists = 0;
  var total_rebotes = 0;

  jogos.forEach((jogo) => {
    const {points, assists, totReb} = jogo;
    
    total_pontos += points;
    total_assists += assists;
    total_rebotes += totReb;
  });

  const media_pontos = (total_pontos / numJogos).toFixed(1);
  const media_assists = (total_assists / numJogos).toFixed(1);
  const media_rebotes = (total_rebotes / numJogos).toFixed(1);
  
  const tabela = {
    "Média de pontos": media_pontos,
    "Média de Assistências": media_assists,
    "Média de rebotes": media_rebotes,
  };

  
  return tabela; 
  }

export default lista_estatisticas_jogador;