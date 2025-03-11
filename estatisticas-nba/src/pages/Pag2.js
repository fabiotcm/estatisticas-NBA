import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

class Pag2 extends React.Component {
  render(){
    return(
      <div>
        <Link to='/Teams'>Pag1</Link>
        <Loading />
      </div>
    )
  }
}

export default Pag2;