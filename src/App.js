import React, { Component } from 'react';
import Rolldie from './RollDices/Rolldie';
import Lottoball from './LottoBall/Lottoball';
import Coinflip from './CoinFlip/Coinflip';

import {Container} from '@mui/material'
//main app to execute Rolldie
class App extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <Rolldie />
        <Lottoball />
        <Coinflip />
      </Container>
    );
  }
}

export default App;