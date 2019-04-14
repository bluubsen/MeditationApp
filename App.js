import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import MeditationScreen from "./screens/MediationScreen";
import LoginScreen from "./screens/LoginScreen";


export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const DrawerNavigationProfilHeader = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 200, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>

            <Image source={require('./Icons/Icons/png/lotus-position-1.png')}
                   style={{ height: 120, width: 120, borderRadius: 60 }} />

        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)


class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome</Text>
      </View>
    );
  }
}


class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Meditation: { screen: MeditationScreen }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
