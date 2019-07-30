import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import COLORS from './colors';
import ClapBubble from './ClapBubble';

class ClapsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clapCount: props.clapCount || 0,
      claps: [],
    };
  }

  animationComplete = (countNum) => {
    const { claps } = this.state;
    setTimeout(() => {
      claps.splice(claps.indexOf(countNum), 1);
      this.setState({ claps });
    }, 200);
  }

  keepClapping = () => {
    this.clapTimer = setInterval(() => {
      this.onPressClap();
    }, 150);
  }

  stopClapping = () => {
    if (this.clapTimer) {
      clearInterval(this.clapTimer);
    }
  }

  onPressClap = () => {
    const { clapCount, claps } = this.state;
    const newClapCount = clapCount + 1;
    this.setState({ clapCount: newClapCount });
    claps.push(newClapCount);
  }

  renderClaps = () => {
    const { claps } = this.state;
    return claps.map(countNum => (
      <ClapBubble
        key={`${countNum}`}
        countNum={countNum}
        animationComplete={this.animationComplete}
      />
    ));
  }

  render() {
    const { clapCount } = this.state;
    const clapIcon = clapCount === 0
      ? require('./images/clap.png') : require('./images/clapped.png');
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onPressClap}
          onPressIn={this.keepClapping}
          onPressOut={this.stopClapping}
          activeOpacity={0.7}
          style={styles.clapButton}
        >
          <Image source={clapIcon} style={styles.clapIcon} />
        </TouchableOpacity>
        {this.renderClaps()}
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
    elevation: 2,
  },
  clapIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default ClapsButton;
