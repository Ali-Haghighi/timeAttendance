import React, { useState, useEffect, useRef } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    ScrollView,
    Image,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Button

} from "react-native";
import Textinputcomponent_changepassword from "./textinputcomponent/textinputpass";

function Change_password()
{
    const [password, setpassword] = React.useState("");
    const [repeatpassword, setrepeatpassword] = React.useState("");
    function setpasswordfunc(data) {
        setpassword(data)
    }
    function setrepeatpasswordfunc(data) {
        setrepeatpassword(data)
    }
    return (
        <View style={styles.maincontainer} >
            <View style={{ height: 100, marginHorizontal: 16 }}><Textinputcomponent_changepassword INSIDE_TEXT={"پسورد جدید"} VALU={setpassword} RIGHT={"35%"} /></View>
            <View style={{ height: 100 ,marginHorizontal:16 }}><Textinputcomponent_changepassword INSIDE_TEXT={"تکرار پسورد جدید"} VALU={setpassword} RIGHT={"31%"} /></View>
            <TouchableOpacity style={{ backgroundColor: '#147EFB', padding: 10, justifyContent: "center", alignItems: "center", borderRadius: 10, marginHorizontal: 16, marginBottom: 10 }}>
                <Text style={{ color: '#fff', fontFamily: "EstedadRegular" }}>ثبت</Text>
            </TouchableOpacity>
        </View>
    )

}
export default Change_password;

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "#E9E7FD",
        flex: 1,
        justifyContent:"center"
    }})