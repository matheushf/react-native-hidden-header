import React from 'react';
import {
  View
} from 'react-native';
import Normal from './normal';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Normal changeType={this.changeType} />
      </View>
    );
  }
}
