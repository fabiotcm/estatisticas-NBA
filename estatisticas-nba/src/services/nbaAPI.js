const times_nba = async () => {

  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "b8a174623e936260e0c84d01701daa66");
  myHeaders.append("x-rapidapi-host", "v2.nba.api-sports.io");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const request = await fetch('https://v2.nba.api-sports.io/teams', requestOptions);
  const requestJSON = await request.json();
  return requestJSON
}

export default times_nba;
