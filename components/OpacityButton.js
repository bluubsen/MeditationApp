import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Dimensions
} from "react-native";

const { width: WIDTH } = Dimensions.get('window')

class OpacityButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            textContent: this.props.textContent,
            fkt: this.props.fkt
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.btnLogin} onPress={this.state.fkt}>
                <Text style={styles.text}>{this.state.textContent}</Text>
            </TouchableOpacity>
        );
    }
}
export default OpacityButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center'
    }
});