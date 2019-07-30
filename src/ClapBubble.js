import React, { Component } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import COLORS from './colors';

class ClapBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yPosition: new Animated.Value(0),
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { yPosition, opacity } = this.state;
    const { animationComplete, countNum } = this.props;
    const movementAnimation = Animated.timing(
      yPosition,
      {
        toValue: -120, // shift upwards by 120 units
        duration: 300, // the animation will last for 300 milliseconds
        useNativeDriver: true,
      },
    );
    const opacityAnimation = Animated.timing(
      opacity,
      { toValue: 1, duration: 300, useNativeDriver: true },
    );

    Animated.parallel([
      movementAnimation, opacityAnimation,
    ]).start(() => {
      animationComplete(countNum);
    });
  }

  render() {
    const { yPosition, opacity } = this.state;
    const { countNum } = this.props;
    const animationStyle = {
      transform: [{ translateY: yPosition }],
      opacity,
    };
    return (
      <Animated.View style={[styles.clapBubble, animationStyle]}>
        <Text style={styles.clapCount}>{`+ ${countNum}`}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  clapBubble: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: COLORS.MEDIUM_GREEN,
    position: 'absolute',
    bottom: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clapCount: {
    color: 'white',
    fontSize: 15,
  },
});

export default ClapBubble;
