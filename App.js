import React, {Component} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from "./app/screens/HomeScreen";
import MeditationScreen from "./app/screens/MediationScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SettingsScreen from "./app/screens/SettingsScreen";
import ProfilScreen from "./app/screens/ProfilScreen";
import SignUpScreen from "./app/screens/SignUpScreen";

const developmentMode = true;

export default class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

const DrawerNavigationProfilHeader = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{height: 200, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>

            <Image source={require('./Icons/Icons/png/lotus-position-1.png')}
                   style={{height: 120, width: 120, borderRadius: 60}}/>

        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const DrawerNavigator = createDrawerNavigator({
        Meditation: {
            screen: HomeScreen
        },
        Settings: {screen: SettingsScreen},
        Profil: {screen: ProfilScreen},
        Login: {screen: LoginScreen}
    }
    , {
        contentComponent: DrawerNavigationProfilHeader,
        contentOptions: {activeTintColor: 'orange'}
    })
;


const AppSwitchNavigator = createSwitchNavigator({
    Login: {screen: LoginScreen},
    Home: {screen: DrawerNavigator},
    Meditation: {screen: MeditationScreen},
    SignUp: {screen: SignUpScreen}
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
