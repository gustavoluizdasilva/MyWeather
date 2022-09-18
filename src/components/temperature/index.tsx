import React from "react";
import { Text, View } from "react-native";
import Styles from "./style";

const Temperature = () => {
    return (
        <View style={Styles.conteiner}>
            <Text style={Styles.temperature}> 99° C</Text>
            <Text>Francisco Bltrão</Text>
        </View>
    )
}

export default Temperature

