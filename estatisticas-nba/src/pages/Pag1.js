import React from "react";
import { Link } from "react-router-dom";
import times_nba from "../services/nbaAPI";





class Pag1 extends React.Component{
  
  state = {
    times : [],
  };
  
  componentDidMount() {
    this.lista_times();
  }

  lista_times = async () => {
    const todos_times = await times_nba();
    const {response} = todos_times;
    let lista_times_nba = response.filter((x) => x.nbaFranchise);
    this.setState(() => ({
      times : lista_times_nba
    }))
  }

  
  render(){
    const {times} = this.state;
    const array_times = times.map((time) => {
      const logo_time = time.logo;
      const nome_time = time.name;
      return (<div key={nome_time}>
        <img src={logo_time} alt={nome_time}/>
        <div>{nome_time}</div>
      </div>)
    })
    return(
      <div>
        <Link to='/Pag2'>Pag2</Link>
        {array_times}
      </div>
      
    )
  }
}

export default Pag1;