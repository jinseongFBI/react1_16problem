import React, { Component } from 'react'
import $ from 'jquery';
export default class R16_Jquery extends Component {
    input_alert= (e) => {
        let input_val = $('#inputId').val();
        alert(input_val);
    }
    render() {
        return (
           <div>
               <h2>[this is jquery]</h2>
               <input id="inputId" name="inputName" />
               <button id="buttonId"onClick={e=>this.input_alert(e)}>
                   Jquery Button
                   </button>
               
           </div>
        )
    }
}
//npm install jquery