import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {Body, Header, Icon, Left} from "native-base";
import {createSwitchNavigator} from 'react-navigation';
import DurationSlider from "../../components/DurationSlider";
import OpacityButton from "../../components/OpacityButton";

class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    constructor(props) {
        super(props);
    }

    startMeditation = () => {
        this.props.navigation.navigate('Meditation')
        alert('MEDITATION HAS BEEN STARTED')
    }

    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <Body style={styles.settings}>
                <DurationSlider duration={0} minDuration={0} maxDuration={15} />
                <DurationSlider duration={10} minDuration={1} maxDuration={100} />
                <OpacityButton textContent={'Start Meditation'} fkt={this.startMeditation} />
                </Body>
            </View>
        );
    }
}

//const AppSwitchNavigator = createSwitchNavigator({
//    Home: { screen: HomeScreen },
//    Meditation: { screen: MeditationScreen }
//});

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContent: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        alignItems: "center",
        justifyContent: "center"
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: 'rgb(252, 228, 149)'
    },
    settings: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});