import React from "react"
import { Text, View } from "react-native"
import Board from "./src/screens/Board"
import ListClimate from "./src/screens/ListClimate"

const App = () => {
    return(
        <View>
        <Board/>
        <ListClimate/>
        </View>
    )   
}

export default App