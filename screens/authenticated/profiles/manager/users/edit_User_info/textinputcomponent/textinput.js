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
} from "react-native";
import Modal from "react-native-modal";

function Textinputcomponent({ INSIDE_TEXT, props, VALU, RIGHT, GRADE }) {

    const [inputbackgroundcolor, setinputbackgroundcolor] = useState("#F2F1FE");
    const [changevalue, set_changevalue] = useState();
    const [grade_modal, set_grade_modal] = useState(false)

    function handlemodal() {
        if (GRADE == true) {
            set_grade_modal(true);
            console.log("aaa")
        }

    }

    function ONFOCUSFUNC() {
        props?.onFocus;
        setinputbackgroundcolor("white")


    }
    function ONBLURFUNC() {
        props?.ONBLUR;
        setinputbackgroundcolor("#F2F1FE")

    }
    return (
        <View style={{flex:1,flexDirection:"column"}}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 30 }}>
                <Text style={{ fontFamily: "EstedadSemiBold", right: RIGHT, top: "20%", zIndex: 1, color: "#595959" }}>
                    {INSIDE_TEXT}
                </Text>
                <TextInput
                    onPressIn={handlemodal}
                    onFocus={ONFOCUSFUNC}
                    onBlur={ONBLURFUNC}
                    selectionColor="grey"
                    style={[{ backgroundColor: inputbackgroundcolor }, styles.inputname]}
                    onChangeText={(txt) => VALU(txt)}
                    value={changevalue}

                />
            </View>
            <View style={styles.modaltopcontainer}>
                <Modal
                  
                    style={styles.modalcontainer}
                    isVisible={grade_modal}
                    onBackdropPress={() => set_grade_modal(false)}
                    backdropColor="#c7c8c9"
                >
                    <View style={styles.modal}>

                    </View>
                </Modal>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "#E9E7FD",
        flex: 1,
    },
    imagecontainer: {
        height: "15%",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    inputname: {
        height: 60,
        width: "80%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: "#BFBFBF",
        fontFamily: "EstedadRegular"

    },
    modaltopcontainer: {
        
    },
    modalcontainer: {
        flex: 1,
        padding:0,
        margin:0,
        justifyContent:"flex-end"
    },
    modal: {
        backgroundColor: "white",
        height: "40%",
        borderRadius: 10,
        marginHorizontal: -5,
    },
});

export default Textinputcomponent