import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Slider
} from "react-native";

class DurationSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: this.props.duration,
            minDuration: this.props.minDuration,
            maxDuration: this.props.maxDuration,
        };
    }

    render() {
        return (
            <View>
                <Slider step={1}
                        minimumValue={this.state.minDuration}
                        maximumValue={this.state.maxDuration}
                        value={this.state.duration}
                        onValueChange={value => this.setState({ duration: value })}
                        style={{ width: 300 }}
                        thumbTintColor='rgb(252, 228, 149)'
                        maximumTrackTintColor='#d3d3d3'
                        minimumTrackTintColor='rgb(252, 228, 149)' />
                <View style={styles.textContent}>
                    <Text style={styles.colorGrey}>{this.state.minDuration} min</Text>
                    <Text styles={styles.colorYellow}>{this.state.duration + 'min'}</Text>
                    <Text style={styles.colorGrey}>{this.state.maxDuration} min</Text>
                </View>
            </View>
        );
    }
}
export default DurationSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContent: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: 'rgb(252, 228, 149)'
    }
});