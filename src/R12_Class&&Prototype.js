import React, { Component } from 'react'

export default class ClassPrototype extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
        //es5 prototype
        let ExamCountFunc=(function(){
            function ExamCount(num){
                this.number=num;
                }
            ExamCount.prototype.showNum=function(){
                console.log('1. react_ '+ this.number);
            }
            return ExamCount;}())
        let cnt=new ExamCountFunc('200');
        cnt.showNum();

        //es6 class
        class ExamCountClass{
            constructor(num2){
                this.number2=num2;
            }
            showNum(){
                console.log(`2. react_${this.number2}`);
            }
        }
        const cnt2=new ExamCountClass('2hundred');
        cnt2.showNum();
    }
    
    render() {
        return (
           <h2>[this is class]</h2>
        )
    }
}
