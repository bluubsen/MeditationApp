import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Button, Header, Left, Icon } from "native-base";


class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor})=> (
            <Icon name="settings" style={{fontSize:24, color:tintColor}}/>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View style={{ flex: 1, alignItems: "center", justifyContent:"center" }}>

                    <Text>SettingsScreen</Text>
                </View>

            </View>
        );
    }
}
export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});