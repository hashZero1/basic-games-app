import React, { Component } from 'react';
import Balls from './Balls';
import "./balls.css";
import {Paper} from '@mui/material';
// steps 1 declare default 
class Lottoball extends Component {
    static defaultProps = {
        title: 'Lottoball',
        numBalls: 6,
        maxNum: 40
    };
    //step 2 declare contstructor properties
    constructor(props) {
        super(props);
        //this take array length from defined numBalls 
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.changeBall = this.changeBall.bind(this);
    };
    // 4 define function to random number
    // have diffrent named logic function which is easier to read than
    generateballs() {
        this.setState(curState => ({
            // mean take to currState and set num to currState
            //that going to create new array of same length and create new random number
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }))
    }
    //first define function then execute in main named function 
    changeBall() {
        this.generateballs()
    }
    // step 3 render the ball components
    //to loop over all balls components --------------!
    render() {
        return (
            <Paper sx={{m:2,p:2}}>
   <div className="Lottoball">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(m => <Balls num={m} />)}
                </div>
                <button className='Ball-button' onClick={this.changeBall}>Click ME</button>
            </div>
            </Paper>
         
        );
    }
}
export default Lottoball;