import React, { Component } from 'react'

export default class R14_ForEach extends Component {
    componentDidMount () {
        let Es5_Arr=[1,2,3,4];
        let Es5_newArr=[];
        for (let i=0;i<Es5_Arr.length;i++){
            Es5_newArr.push(Es5_Arr[i]);
        }
        console.log("1. For_newArr: ["+Es5_newArr+"]");


        let Es6_Arr=[11,12,13,14];
        let Es6_newArr=[];
        Es6_Arr.forEach((result)=>{
            Es6_newArr.push(result);
        })
        console.log("2. ForEach_newArr:["+Es6_newArr+"]");
    }
    render() {
        return (
            <h2>[this is forEach]</h2>
        )
    }
}
