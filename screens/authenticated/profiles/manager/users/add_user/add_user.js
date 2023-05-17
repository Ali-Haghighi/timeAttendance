import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from '@expo/vector-icons';
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
    Button,
    Pressable

} from "react-native";

import Modal from "react-native-modal";
import { Directions } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 

function Add_User({ PRESS, MODALSTATE }) {
   
    return (

        <Modal
            style={{ width: "100%", margin: 0 }}
            isVisible={MODALSTATE}
            onBackdropPress={PRESS}
            backdropColor="#c7c8c9"
        >
            <View style={{ backgroundColor: "#FFFFFF", height: "15%",top:"43%", borderRadius: 20 }} >
                <View style={styles.containetModal}>
                    <View style={styles.singleAdd}>
                        <TouchableOpacity style={{ flexDirection: "row", marginLeft: 20, height:"100%",alignItems:"center"}}>
                            <Ionicons name="person-add" size={24} color="#4B3FF3" />
                            <Text style={{ fontSize: 18, fontFamily:"EstedadRegular",paddingRight:15}}>اضافه کردن تکی</Text>
                        </TouchableOpacity>
                      
                    </View>
                    <View style={styles.groupAdd}>
                        <TouchableOpacity style={{ flexDirection: "row", marginLeft: 20, height: "100%", alignItems: "center" }}>
                            <AntDesign name="addfolder" size={24} color="#4B3FF3" />
                            <Text style={{ fontSize: 18, fontFamily: "EstedadRegular", paddingRight: 15 }}>اضافه کردن گروهی</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>

    )

}
export default Add_User

const styles = StyleSheet.create({
    containetModal: {
        flex: 1,
        flexDirection:"column",

        marginVertical:5,
        
        

    },
    singleAdd: {
        width:"100%",
        height: "50%",
  
        justifyContent:"center"
    },
    groupAdd: {
        width: "100%",
        height: "50%",

        justifyContent:"center"
    }
});