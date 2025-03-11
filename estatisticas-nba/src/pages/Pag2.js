import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NBAContext from "../context/NBAContext";

class Pag2 extends React.Component {
  
  componentDidMount() {
    let nba = this.context;
    console.log(nba.v);
  }

  render(){
    return(
      <div>
        <Link to='/Teams'>Pag1</Link>
        <Loading />
      </div>
    )
  }
}
Pag2.contextType = NBAContext;

export default Pag2;