import React from "react";

class StatsBox extends React.Component {
  render() {
    const logo = this.props.logo;
    return(
        <div id="stats-box">
          <div id="stats-card-box">
            <div className="logo-box" >
              {logo ? <img src={logo} alt="Logo Clube" width='400' height='400'/> : ''}
            </div>
            <div className="test-box-2"></div>
          </div>
        </div>
    )
  }
}

export default StatsBox;