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


const estatistica_time = async () => {

  const request = await fetch('https://v2.nba.api-sports.io/teams/statistics?season=2022&id=10', requestOptions);
  const requestJSON = await request.json();
  return requestJSON;
}

const nbaManager = {
  times_nba, 
  estatistica_time,
};


export default nbaManager;
