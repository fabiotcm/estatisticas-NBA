import React from "react";
import Logo from "../components/Logo";

class Login extends React.Component {
  render(){
    return(
    <div>
      <Logo/>
      <input placeholder="Usuário"></input>
      <input placeholder="Senha" type="password"></input>
    </div>
    )
  }
}

export default Login;