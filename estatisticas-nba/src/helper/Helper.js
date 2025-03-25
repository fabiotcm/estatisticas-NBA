const lista_estatisticas_jogador = (jogos) => {
  const numJogos = jogos.length;
  var total_pontos = 0;
  jogos.forEach((jogo) => {
    const {points} = jogo;
    total_pontos += points;
  });
  return (total_pontos / numJogos).toFixed(1); 
}

export default lista_estatisticas_jogador;