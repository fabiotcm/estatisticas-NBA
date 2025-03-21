import React from "react";

class StatsBox extends React.Component {
  render() {
    const logo = this.props.logo;
    return(
        <div id="stats-box">
          <div className="test-box" >
            {logo ? <img src={logo} alt="Logo Clube" /> : ''}
          </div>
          <div className="test-box-2"></div>
        </div>
    )
  }
}

export default StatsBox;