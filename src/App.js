/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Naivgation Example!
        </Text>
        <Button
          onPress={() => navigate('ChatScreen', {user: 'Jiten'})}
          title="Chat with Jiten"
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat with ' + navigation.state.params.user
  })
  render() {
    //const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Chat with Jiten</Text>
      </View>
    )
  }
}
class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}
class AllContactsScreen extends React.Component {
  render() {
    return (<Text>List of all contacts</Text>)
  }
}

const MainScreenNavigator = TabNavigator({
  AllContact: { screen : HomeScreen},
  Recent : {screen: RecentChatsScreen},
})
const App = StackNavigator({
    Home: {
      screen : MainScreenNavigator,
      navigationOptions: {
        title: 'My Chats',
      },
    },
    ChatScreen: {screen: ChatScreen}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default App
