import React, { Component } from 'react';
import { buffList, specList } from "./data";

class Roster extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           roster: [],
           activeBuffs: [],
           activeDebuffs: []
          };

      };
    
      handleClick(i, event){
        this.setState({ 
          roster: [...this.state.roster, specList[i]],
          activeBuffs: [...this.state.activeBuffs, ...specList[i].buffs],
          activeDebuffs: [...this.state.activeDebuffs, ...specList[i].debuffs] 
        }); 
      };

      handleDelete(i, event){
        let tempArr = this.state.roster;
        tempArr.splice(i,1);
        this.setState({ roster: tempArr });
      };

    render() {

      return(
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {this.state.roster.map((spec,i) => <img className="spec" src={window.location.origin + '/icons/'+spec.name+'.png'}  alt={spec.name} onClick={this.handleDelete.bind(this,i)} />)}
          </div>
          
          <div className="col-sm">
            {specList.map((spec,i) => <img className="spec" src={window.location.origin + '/icons/'+spec.name+'.png'} alt={spec.name} onClick={this.handleClick.bind(this, i)} />)}
          </div>
            
          <div className="col-sm">
            <ul>
              {buffList.map((buff, i) => <li key={i.toString()}>{this.state.roster.filter(function(spec){ return spec.buffs.includes(buff) }).length} {buff}</li>)}
            </ul>
          </div>
        </div>
      </div>

      
      );
    };
  };

  export default Roster;
  