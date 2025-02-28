import React from "react";
import Logo from "../components/Logo";
import "./css/pages.css"
import { Navigate } from "react-router-dom";



class Login extends React.Component {

 state = {
    user : '',
    password: '',
    validate_password : false,
    popup : false,
  };

  user_state_change = ({ target }) => {
    const user_value = target.value;
    this.setState(() => ( {
      user : user_value,
    } ));
    console.log(user_value);
  }

  password_state_change = ({ target }) => {
    const password_value = target.value;
    this.setState(() => ({
      password : password_value,
    } ));
    console.log(password_value);
  }

  teste_de_senha = () => {
    const {user} = this.state;
    const {password} = this.state;
    const {validate_password} = this.state;
    console.log(user);
    console.log(password);
    if (password.length >= 3){
      this.setState(() => ({
        validate_password : true,
      }))
    } else {
      this.setState(() => ({
        validate_password : false,
        popup : true,
      }))
    }
  }



  render(){

    const {validate_password, popup} = this.state;
    if (validate_password){
      return(
        <Navigate to='/pag1'/>
      );
    }

    return(
      <div className="flex-box">
      <Logo/>
      <input placeholder="Usuário"></input>
      <input placeholder="Senha" type="password"></input>
      </div>
      <div>
        <input placeholder="Usuário" onChange={this.user_state_change}></input>
        <input placeholder="Senha" type="password" onChange={this.password_state_change}></input>
        <button onClick={this.teste_de_senha}>Login</button>
        {popup ? <div>Senha Inválida</div> : ''}
      </div>
    )
  }
}

export default Login;