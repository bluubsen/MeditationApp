import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Header, Left, Icon } from "native-base";

class ProfilScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="person" style={{ fontSize: 24, color: tintColor}}/>
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
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>ProfilScreen</Text>
                </View>
            </View>
        );
    }
}
export default ProfilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});