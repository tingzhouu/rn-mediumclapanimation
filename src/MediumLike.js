import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from './colors';
import ClapsButton from './ClapsButton';

class MediumLike extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ClapsButton
          // clapCount={13} // Optional: use this prop to initialize number of claps
        />
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
