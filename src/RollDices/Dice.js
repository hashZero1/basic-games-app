import React, { Component } from 'react';
import "./die.css";
class Dice extends Component {
    render() {
        //imbed custom icon for dice components and classes
        return <i className={`Die fa-solid fa-dice-${this.props.face} ${this.props.rolling && 'rolling'}`}></i>
    }
}

export default Dice;