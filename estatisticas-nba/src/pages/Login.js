import React from "react";

class Login extends React.Component {
  render(){
    return(
    <div>
      <input placeholder="Usuário"></input>
      <input placeholder="Senha" type="password"></input>
    </div>
    )
  }
}

export default Login;