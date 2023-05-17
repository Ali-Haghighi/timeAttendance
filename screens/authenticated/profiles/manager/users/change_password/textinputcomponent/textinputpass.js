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
     
function Textinputcomponent_changepassword({ INSIDE_TEXT, props,VALU,RIGHT })
{

    const [inputbackgroundcolor, setinputbackgroundcolor] = useState("#F2F1FE");
    const [changevalue, set_changevalue] = useState();

    

    
  
    
    function ONFOCUSFUNC() {
        props?.onFocus;
        setinputbackgroundcolor("white")
    

    }
    function ONBLURFUNC() {
        props?.ONBLUR;
        setinputbackgroundcolor("#F2F1FE")

    }
    return(
        
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center",paddingBottom:30 }}>
                <Text style={{ fontFamily: "EstedadSemiBold", right:RIGHT, top: "20%", zIndex: 1, color: "#595959" }}>
                    {INSIDE_TEXT}
                </Text>
                <TextInput
                    onFocus={ONFOCUSFUNC}
                    onBlur={ONBLURFUNC}
                    selectionColor="grey"
                    style={[{ backgroundColor: inputbackgroundcolor }, styles.inputname]}
                onChangeText={(txt) => VALU(txt)}
                value={changevalue}
                   
                />
           
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
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: "#BFBFBF",
        fontFamily:"EstedadRegular"

    }
});

export default Textinputcomponent_changepassword