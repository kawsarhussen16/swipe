import React, { Component } from "react";
import { Text, View, StyleSheet, Animated, PanResponder } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    });

    this.state = { panResponder, position };
  }
  renderCards() {
    return this.props.data.map((item) => this.props.renderCard(item));
  }
  render() {
    return (
      <Animated.View
        {...this.state.panResponder.panHandlers}
        style={this.state.position.getLayout()}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
