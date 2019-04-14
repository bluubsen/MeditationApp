import React, {Component} from "react";
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback, Keyboard
} from "react-native";
import bgImage from "../backgrounds/Pictures/dawn-dusk-evening-861443.jpg";
import {Icon} from "native-base";


const {width: WIDTH} = Dimensions.get('window')

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({showPass: false, press: true})
        } else {
            this.setState({showPass: true, press: false})
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                    <View styles={styles.logoContainer}>
                        {/*<Image />  for the logo is here a place*/}
                        <Text style={styles.textContent}>Easy Meditaion</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'person'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name={'lock'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            secureTextEntry={this.state.showPass}
                            autoCorrect={false}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid='transparent'
                        />
                        <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                            <Icon name={this.state.press == false ? 'eye' : 'eye-off'} size={26}
                                  color={'rgba(255,255,255,0.7)'}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </TouchableWithoutFeedback>
        )
            ;
    }
}

export default LoginScreen;


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    textContent: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0, 0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    }, inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
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