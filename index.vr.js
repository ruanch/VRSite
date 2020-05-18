import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import ButtonList from './components/ButtonList'

import Canvas from './components/Canavs'

export default class react_vr extends React.Component {
  constructor(){
    super()
    this.state = {
      src:"02.jpg"
    }
  }
  render() {
    return (
      <View>
        <Canvas src={this.state.src}/>
        <ButtonList onClick={(img)=>{
          console.log(img)
          this.setState({
            src:img
            })
        }} />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
