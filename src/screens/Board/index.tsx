import React from "react";
import { View } from "react-native";
import ImageIcon from "../../components/image";
import Temperature from "../../components/temperature";
import Styles from "./style";

const Board = () =>{
    return (
        <View style={Styles.conteiner}>            
            <Temperature></Temperature>
            <ImageIcon/>            
        </View>
    )
}

export default Board