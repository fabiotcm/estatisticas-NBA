var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "b8a174623e936260e0c84d01701daa66");
myHeaders.append("x-rapidapi-host", "v2.nba.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


const times_nba = async () => {

  const request = await fetch('https://v2.nba.api-sports.io/teams', requestOptions);
  const requestJSON = await request.json();
  return requestJSON;
}


const estatistica_time = async (id) => {

  const request = await fetch(`https://v2.nba.api-sports.io/teams/statistics?season=2022&id=${id}`, requestOptions);
  const requestJSON = await request.json();
  return requestJSON;
}

const jogadores_time = async (id) => {

  const request = await fetch(`https://v2.nba.api-sports.io/players?season=2022&team=${id}`, requestOptions);
  const requestJSON = await request.json();
  return requestJSON;
}

const estatistica_jogador = async (id) => {
  const request = await fetch(`https://v2.nba.api-sports.io/players/statistics?season=2022&id=${id}`, requestOptions);
  const requestJSON = await request.json();
  return requestJSON;
   
}

const nbaManager = {
  times_nba, 
  estatistica_time,
  jogadores_time,
  estatistica_jogador,
};


export default nbaManager;
