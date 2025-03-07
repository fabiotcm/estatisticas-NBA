import React from "react";
import times_nba from "../services/nbaAPI";
import "./css/pag1.css";


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
      return (
        <div className="team-card" key={time.name}>
          <img src={time.logo} alt={time.name}/>
        </div>)
    })
    return(
      <div>
        <div className="team-box">
          {array_times}
        </div>
      </div>
      
    )
  }
}

export default Pag1;