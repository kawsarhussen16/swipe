import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Deck extends Component {
  renderCards() {
    return this.props.data.map((item) => this.props.renderCard(item));
  }
  render() {
    return <View style={styles.container}>{this.renderCards()}</View>;
  }
}

export default Deck;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
