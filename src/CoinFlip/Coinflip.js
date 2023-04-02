import React, { Component } from 'react';
import Coin from './Coin';
import "./coin.css";
import {Paper} from '@mui/material'
class Coinflip extends Component {
    static defaultProps = {
        title: 'Coin flip',
        sides: ['heads', 'tail']
    }
    constructor(props) {
        super(props);
        this.state = { coin: null, tHeads: 0, tTails: 0, cFlips: 0 }
        this.coinFlips = this.coinFlips.bind(this);
    }
    generate() {
        const newCoin = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState(st => {
            return {
                coin: newCoin,
                cFlips: st.cFlips + 1,
                tHeads: st.tHeads + (newCoin === "heads" ? 1 : 0),
                tTails: st.tTails + (newCoin === "tail" ? 1 : 0),
            }
        })
    }
    coinFlips() {
        this.generate()
    }
    render() {
        return (
            <Paper sx={{m:2,p:2}}>
  <div className='Lottoball'>
                <h1 >{this.props.title}</h1>
                <button className='Ball-button' onClick={this.coinFlips} >Coin Flip </button>
                <p>Coin flips is {this.state.cFlips} times and {this.state.tHeads} times Heads, {this.state.tTails} times Tails</p>
                <Coin flips={this.state.coin} />

            </div>
            </Paper>
          
        )
    }
}

export default Coinflip;