import React from "react";
import { Link, Redirect } from "react-router-dom";
import jogadores_por_temp from "../services/nbaAPI";


console.log(jogadores_por_temp());

class Pag1 extends React.Component{
  render(){
    return(
      <Link to='/Pag2'>Pag2</Link>
    )
  }
}

export default Pag1;