import React, { Component } from 'react'

export default class R10_Variable extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
        var varName='react';
        console.log('varName1:'+varName);
        var varName='200';
        console.log('varName2:'+varName);

        let letName='react';
        console.log('letName:'+letName);
        letName='react200';
        console.log('letName2: '+letName);

        const constName='react'
        console.log('constName: '+ constName)

    }
    render() {
        return (
            <h2>[this is variable]</h2>
        )
    }
}
