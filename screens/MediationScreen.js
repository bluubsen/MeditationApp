import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class MeditationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MeditationScreen</Text>
            </View>
        );
    }
}

export default MeditationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(252, 228, 149)'
    }
});