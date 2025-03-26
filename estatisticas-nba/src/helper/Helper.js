const lista_estatisticas_jogador = (jogos) => {
  const numJogos = jogos.length;
  var total_pontos = 0;
  var total_assists = 0;
  var total_rebotes = 0;
  var total_bloqueios = 0;
  var total_roubos = 0;
  var nome_jogador = '';

  jogos.forEach((jogo) => {
    const {points, assists, totReb, player, blocks, steals} = jogo;
    
    nome_jogador = player.firstname + ' ' + player.lastname;
    total_pontos += points;
    total_assists += assists;
    total_rebotes += totReb;
    total_bloqueios += blocks;
    total_roubos += steals;
  });

  const media_pontos = (total_pontos / numJogos).toFixed(1);
  const media_assists = (total_assists / numJogos).toFixed(1);
  const media_rebotes = (total_rebotes / numJogos).toFixed(1);
  const media_bloqueios = (total_bloqueios / numJogos).toFixed(1);
  const media_roubos = (total_roubos / numJogos).toFixed(1);
  
  
  const tabela = {
    "Jogador": nome_jogador,
    "Média de Pontos": media_pontos,
    "Média de Assistências": media_assists,
    "Média de Rebotes": media_rebotes,
    "Média de Bloqueios": media_bloqueios,
    "Média de Roubos": media_roubos,
  };

  
  return tabela; 
  }

export default lista_estatisticas_jogador;