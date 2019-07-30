import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from './colors';
import ClapsButton from './ClapsButton';

class MediumLike extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ClapsButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default MediumLike;
