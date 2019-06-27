import React from 'react';
import { Constants } from 'expo';
import {
  RefreshControl, View, Text
} from 'react-native';
import HiddenHeader from 'react-native-hidden-header';

export default class Normal extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _renderItems() {
    const items = new Array(40).fill(0);

    return items.map((item, index) => (
      <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, padding: 15 }} key={index}>
        <Text>Item</Text>
      </View>
    ));
  }

  render() {
    return (
      <HiddenHeader
        header={() => (
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 20,
            paddingTop: 20 + Constants.statusBarHeight,
            backgroundColor: '#430958'
          }}
          >
            <Text style={{ color: 'white' }}>Header</Text>
          </View>
        )}
        refreshControl={(
          <RefreshControl
            onRefresh={() => {}}
          />
        )}
      >
        <View>
          {this._renderItems()}
        </View>
      </HiddenHeader>
    );
  }
}
