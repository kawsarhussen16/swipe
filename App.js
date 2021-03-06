import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DATA } from "./src/components/Data";
import { Card, Button } from "react-native-elements";
import Deck from "./src/components/Deck";

class App extends React.Component {
  renderCard(item) {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }
  renderNoMoreCard() {
    return (
      <Card title="All Done">
        <Text style={{ marginBottom: 10 }}>There no more card left!!!</Text>
        <Button backgroundColor="#03A9F4" title="Get More!" />
      </Card>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCard={this.renderNoMoreCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default App;
