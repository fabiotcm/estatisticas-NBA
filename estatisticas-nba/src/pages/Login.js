import React from "react";


class Login extends React.Component {

 state = {
    user : '',
    password: '',
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

  render(){
    return(
    <div>
      <input placeholder="Usuário" onChange={this.user_state_change}></input>
      <input placeholder="Senha" type="password" onChange={this.password_state_change}></input>
      <button></button>
    </div>
    )
  }
}

export default Login;