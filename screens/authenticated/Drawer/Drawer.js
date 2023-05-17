import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

const DrawerComponent = (props) => {
    return ( <
        View style = {
            { flex: 1, flexDirection: "column", height: "100%" }
        } >
        <
        View style = {
            { paddingTop: 20, backgroundColor: "#786FF6", height: "25%" }
        } >
        <
        Image source = { require("../../../assets/images/girlicon.jpg") }
        style = {
            { height: 64, width: 64, borderRadius: 40, marginLeft: 16, marginTop: 10 }
        }
        /> <
        Text style = {
            { paddingRight: 20, paddingVertical: 5, fontFamily: 'EstedadSemiBold', fontSize: 14, color: '#FFFFFF' }
        } >
        رهام رحمانی(مدیر مدرسه) <
        /Text> <
        Text style = {
            { paddingRight: 20, paddingVertical: 1, fontFamily: 'EstedadSemiBold', fontSize: 14, color: '#FFFFFF' }
        } > مدرسه کوثر < /Text> < /
        View > <
        View style = {
            { flex: 1, flexDirection: "column" }
        } >
        <
        DrawerContentScrollView contentContainerStyle = {
            {}
        } >
        <
        DrawerItemList {...props }
        /> < /
        DrawerContentScrollView > <
        /View> < /
        View >
    );
};

export default DrawerComponent;