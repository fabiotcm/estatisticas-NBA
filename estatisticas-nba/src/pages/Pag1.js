import React from "react";
import { Link, Redirect } from "react-router-dom";
import times_nba from "../services/nbaAPI";



const lista_times = async () => {
  const todos_times = await times_nba();
  const {response} = todos_times;
  let lista_times_nba = [];
  for (let index = 0; index < response.length; index++) {
    if (response[index].nbaFranchise) {
      lista_times_nba.push(response[index]);
    }
  }
  return lista_times_nba;
}

class Pag1 extends React.Component{
  render(){
    console.log(lista_times());
    return(
      <Link to='/Pag2'>Pag2</Link>
    )
  }
}

export default Pag1;