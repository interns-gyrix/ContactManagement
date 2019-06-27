import React from 'react';
import { Text, View, Modal } from 'react-native';

export default class OverlayComponent extends react.component {
    state = {
        Overlaystate: false
    }
    changestate = () => {
        console.log(this.state.changestate)
        this.setstate({
            overlaystate: true
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Welcome</Text>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate(this.changestate.overlaystate)
                    }}
                        style={{ marginTop: 15, width: "85%", backgroundColor: "blue", padding: 15, borderRadius: 10, alignItems: "center" }}
                    >

                        <Text style={{ color: "white" }}> Pressme  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}