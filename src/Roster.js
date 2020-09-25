import React, { Component } from 'react';
import { buffList, specList } from "./data";

class Roster extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           roster: [],
           activeBuffs: [],
           activeDebuffs: []
          }

      }
    
      handleClick(i, event){
        this.setState({ 
          roster: [...this.state.roster, specList[i]],
          activeBuffs: [...this.state.activeBuffs, ...specList[i].buffs],
          activeDebuffs: [...this.state.activeDebuffs, ...specList[i].debuffs] 
        }); 
      };

      handleDelete(i, event){
        let tempArr = this.state.roster
        tempArr.splice(i,1)
        this.setState({ roster: tempArr })

        console.log(this.state.roster)
      }

    render() {

      return(
      <div class="container">
        <div class="row">
          <ul class="col-sm">
            {this.state.roster.map((spec,i) => <img class="spec" src={window.location.origin + '/icons/'+spec.name+'.png'}  alt={spec.name} onClick={this.handleDelete.bind(this,i)} />)}
          </ul>
          
          <ul class="col-sm">
            {specList.map((spec,i) => <img class="spec" src={window.location.origin + '/icons/'+spec.name+'.png'} alt={spec.name} onClick={this.handleClick.bind(this, i)} />)}
          </ul>
            
          <ul class="col-sm">
            {buffList.map((buff) => <li>{this.state.roster.filter(function(spec){ return spec.buffs.includes(buff) }).length} {buff}</li>)}
          </ul>
        </div>
      </div>

      
      )
    }
  }

  export default Roster;
  