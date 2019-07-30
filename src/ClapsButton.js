import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import COLORS from './colors';

class ClapsButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.clapButton}>
          <Image source={require('./images/clap.png')} style={styles.clapIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  clapButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: COLORS.BUTTON,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  clapIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default ClapsButton;
