import React from 'react';
import {
  StyleSheet, Text, View, StatusBar, TouchableOpacity
} from 'react-native';
import HiddenHeader from 'react-native-hidden-header';

export default function Normal(props) {
  return (
    <HiddenHeader
      header={() => (
        <View style={styles.header}><Text style={styles.headerText}>HiddenHeader</Text></View>
      )}
    >
      <StatusBar
        barStyle="light-content"
      />

      <TouchableOpacity onPress={() => props.changeType('custom')} style={styles.block}>
        <Text>Tap here to Custom list view</Text>
      </TouchableOpacity>

      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
    </HiddenHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(34,34,34,.8)'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  block: {
    margin: 15,
    backgroundColor: '#1ac964',
    height: 100,
    borderRadius: 5
  }
});
