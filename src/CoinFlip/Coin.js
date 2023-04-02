import React, { Component } from 'react';
import './coin.css'
class Coin extends Component {
    render() {
        return (
            <div className="coin">
                <img src={`https://tinyurl.com/react-coin-${this.props.flips}-jpg`} alt="photos" />
            </div>
        );

    }
}

export default Coin;