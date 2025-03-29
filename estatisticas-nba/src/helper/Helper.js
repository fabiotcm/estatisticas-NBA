const lista_estatisticas_jogador = (jogos) => {
  const numJogos = jogos.length;
  var total_pontos = 0;
  var total_assists = 0;
  var total_rebotes = 0;
  var total_bloqueios = 0;
  var total_roubos = 0;
  var nome_jogador = '';
  var total_faltas = 0;
  var total_turnovers = 0;
  var total_arremessos = 0;
  var total_acertos_arremessos = 0;
  var total_minutos = 0;
  var posicao = '';
  var total_tres_pontos_tentados = 0;
  var total_tres_pontos_feitos = 0;
  var total_lances_livres = 0;
  var total_lances_livres_feitos = 0;
  var nome_time = '';

  jogos.forEach((jogo) => {
    const {points, assists, totReb, player, blocks, steals, pFouls, turnovers, fga, fgm, min, pos, tpa, tpm, fta, ftm, team} = jogo;
    
    nome_jogador = player.firstname + ' ' + player.lastname;
    nome_time = team.name;
    posicao = pos;
    total_pontos += points;
    total_assists += assists;
    total_rebotes += totReb;
    total_bloqueios += blocks;
    total_roubos += steals;
    total_faltas += pFouls;
    total_turnovers += turnovers;
    total_arremessos += fga;
    total_acertos_arremessos += fgm;
    total_minutos += parseInt(min);
    total_tres_pontos_tentados += tpa;
    total_tres_pontos_feitos += tpm;
    total_lances_livres += fta;
    total_lances_livres_feitos += ftm;
  });

  const media_pontos = (total_pontos / numJogos).toFixed(1);
  const media_assists = (total_assists / numJogos).toFixed(1);
  const media_rebotes = (total_rebotes / numJogos).toFixed(1);
  const media_bloqueios = (total_bloqueios / numJogos).toFixed(1);
  const media_roubos = (total_roubos / numJogos).toFixed(1);
  const media_faltas = (total_faltas / numJogos).toFixed(1);
  const media_turnovers = (total_turnovers / numJogos).toFixed(1);
  const porcentagem_arremessos = ((total_acertos_arremessos * 100) / total_arremessos).toFixed(1);
  const media_minutos = (total_minutos / numJogos).toFixed(1);
  const porcentagem_tres_pontos = ((total_tres_pontos_feitos * 100) / total_tres_pontos_tentados).toFixed(1);
  const media_tres_pontos = (total_tres_pontos_tentados / numJogos).toFixed(1);
  const media_arremessos = (total_arremessos / numJogos).toFixed(1);
  const porcentagem_lance_livre = ((total_lances_livres_feitos * 100) / total_lances_livres).toFixed(1);
  const media_lances_livres = (total_lances_livres / numJogos).toFixed(1);
  
  
  const tabela = {
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
  };


  
  return tabela; 
}

const tratar_estatisticas_time = (season) => {
  
  const temporada = season[0];

  const {win, loss, conference} = temporada || {};
  const {colocacao, vitorias_totais, derrotas_totais} = conference || {};

  const aproveitamento_partidas = win?.percentage;
  const recorde_casa = win?.home + '/' + loss?.home;
  const recorde_fora = win?.away + '/' + loss?.away;
  
  const tabela = {
    colocacao,
    vitorias_totais,
    derrotas_totais,
    aproveitamento_partidas,
    recorde_casa,
    recorde_fora,
  } 

  return tabela;
};

const helperManager = {
  lista_estatisticas_jogador,
  tratar_estatisticas_time,
}

export default helperManager;