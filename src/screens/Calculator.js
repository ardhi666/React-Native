
import { View, StatusBar, Text, TouchableOpacity } from 'react-native'
import React, { useState } from "react";

export default function Calculator({ navigation }) {
    const [resultText, setResultText] = useState('')
    const [calcText, setCalcText] = useState('')

    const onClick = (text) => {
        console.log(text);
        if (text == "=") {
            return calculateResult();
        }
        setResultText(resultText + text);
    };

    const calculateResult = () => {
        setCalcText(eval(resultText));
    };


    const onOperationClick = (operation) => {

        if (operation == "CLEAR") {
            setResultText("");
            setCalcText('');
            return;
        }
        if (operation.includes(resultText.toString())) return;
        setResultText(resultText + operation);
    };

    return (

        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <StatusBar />
            <Text style={{ fontSize: 20, color: "white", padding: 10 }}>Display</Text>
            <View style={{ flex: 0.8 }}>
                <Text style={{ flex: 0.4, backgroundColor: "white", marginRight: 10, marginLeft: 10, textAlign: "right", fontSize: 40 }}>{resultText}</Text>
                <Text style={{ flex: 0.4, backgroundColor: "white", marginRight: 10, marginLeft: 10, textAlign: "right", fontSize: 40 }}>{calcText}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { onOperationClick('CLEAR') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 18, textAlign: "center", padding: 10, backgroundColor: "#930707", margin: 10, width: "20%" }}>CLEAR</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { onClick('1') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onClick('2') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onOperationClick('-') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#930707", margin: 10 }}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onOperationClick('+') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#930707", margin: 10 }}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { onClick('3') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onClick('4') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onOperationClick('/') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#930707", margin: 10 }}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onOperationClick('*') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#930707", margin: 10 }}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { onClick('5') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onClick('6') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onOperationClick('%') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#930707", margin: 10 }}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onClick('=') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#930707", margin: 10 }}>=</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { onClick('7') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onClick('8') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onClick('9') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onClick('0') }} style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "white", justifyContent: "center", fontSize: 40, textAlign: "center", padding: 10, backgroundColor: "#ff5757", margin: 10 }}>0</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
