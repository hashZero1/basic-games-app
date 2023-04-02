import React, { Component } from 'react';
import Dice from './Dice';
import {Paper} from '@mui/material'
//main logic for dice component 
class Rolldie extends Component {
    // default props - declare values
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = { die1: 'one', die2: 'two', isRolling: false }
        this.diceRolled = this.diceRolled.bind(this)
    }
    //function for dice rolling at rondom 
    diceRolled() {
        const dice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const dice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState({ die1: dice1, die2: dice2, isRolling: true });
        //set timeout for rolling state - false for 1 sec
        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000);
    }
    render() {
        return (
            <Paper sx={{m:2,p:2}}>
     <div className="Rolldie">
                <h1>Rolldice Game</h1>
                <div className='Dies'>
                    <Dice face={this.state.die1} rolling={this.state.isRolling} />
                    <Dice face={this.state.die2} rolling={this.state.isRolling} />
                </div>
                <button className='Die-button' onClick={this.diceRolled} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Click TO Roll'}
                </button>
            </div>
            </Paper>
       
        )
    }
}


export default Rolldie;