import React from "react";
import Logo from "../components/Logo";
import "./css/pages.css"

class Login extends React.Component {
  render(){
    return(
    <div className="flex-box">
      <Logo/>
      <input placeholder="Usuário"></input>
      <input placeholder="Senha" type="password"></input>
    </div>
    )
  }
}

export default Login;