import React from 'react';
import './SelectSymptomsStyle.css';

class SelectSymptoms extends React.Component {
  constructor(props) {
    super(props);

    this.style = {};

      this.style.low = {
        backgroundColor: "yellow",
      }

      this.style.mod = {
        backgroundColor: "orange",
      }

      this.style.sev = {
        backgroundColor: "red",
      }

  };

  render() {
    return (
        <div style = {this.style.symptoms}>
            <label class="container">
                <input type="radio" name="radio"/>
            <span class="checkmark" style= {this.style.low}></span>
            </label>
            <label class="container">
                <input type="radio" name="radio"/>
            <span class="checkmark" style= {this.style.mod} ></span>
            </label>
            <label class="container">
                <input type="radio" name="radio"/>
            <span class="checkmark" style= {this.style.sev}></span>
            </label>
        </div>
      
      /*<div className="symptoms" style={this.style.symptoms}>
        <input type="radio" id = "low" value="acnelow" name="severity" style = {this.style.low}/> 
        <input type="radio" id = "moderate" value="acnemod" name="severity " style = {this.style.mod}/> 
        <input type="radio" id = "severe" value="acnesev" name="severity" style = {this.style.sev}/> 
      </div>*/

    );
  }
}

export default SelectSymptoms;