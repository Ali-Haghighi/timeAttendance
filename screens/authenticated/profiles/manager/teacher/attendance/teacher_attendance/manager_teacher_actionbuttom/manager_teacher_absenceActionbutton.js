import { React, useState, useEffect, useRef } from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { ActionSheetProvider, closeOnTouchBackdrop } from "@expo/react-native-action-sheet";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons, AntDesign, Feather, Entypo } from "@expo/vector-icons";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Pressable,
    Alert,
    Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { Backdrop } from "@react-native-material/core";
export default function Manager_teacher_absence_action({ ID }) {
    const navigation = useNavigation();
    const { showActionSheetWithOptions } = useActionSheet();
    const [Actionstate, setActionstate] = useState(false);


 
    const openSheet = () => {
    
        const options = ["مشاهده جزییات","ارسال مجدد پیامک", "حذف غیبت به دلیل فراموشی","بازگشت"];
        const icons = [
            <Ionicons name="person-outline" size={24} color="#4B3FF3" />,
            <MaterialIcons name="textsms" size={24} color="#4B3FF3" />,
            <Feather name="trash-2" size={24} color="#4B3FF3" />,
            <AntDesign name="back" size={24} color="#4B3FF3" />,

           
        ];

        const destructiveButtonIndex = 4; //the first element in 'options' will denote the Delete option
        const cancelButtonIndex = 3; //Element number 2 in the array will be the 'Cancel' button


        showActionSheetWithOptions(
            {
              
                icons,
                options,
                // cancelButtonIndex,
                containerStyle: styles.container,
                textStyle: { fontFamily: "EstedadRegular" },
                destructiveButtonIndex,
                closeOnTouchBackdrop
            },
            (selectedIndex) => {
                
                switch (selectedIndex) {
                    case 0:
                    
                        break;
                    case 1:
      

                        break;
                    case 2:
                  
                        break;

                   
                  // case destructiveButtonIndex:
                    //     // Delete
                    //     break;

                    // case cancelButtonIndex:
                    // // Canceled
                }
            }
        );
    };
    return (
        
        <ActionSheetProvider >
            <View>
                <TouchableOpacity style={styles.threedot} onPress={openSheet}>
                    <Entypo name="dots-three-vertical" size={25} color="black" />
                </TouchableOpacity>
        
            </View>
        </ActionSheetProvider>
    );
}
const styles = StyleSheet.create({
    modaltopcontainer: {
        flex: 1,
    },
    modalcontainer: {
        flex: 1,
    },
    modal: {
        backgroundColor: "white",
        height: "40%",
        borderRadius: 10,
        marginHorizontal: -5,
    },
    deletesection: {
        // backgroundColor: "blue",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: "60%",
    },
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
    },
    message: {
        backgroundColor: "purple",
        color: "white",
    },
    title: {
        backgroundColor: "yellow",
    },
    text: {
        right: 20,
        fontFamily: "EstedadRegular",
    },
    threedot: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    confirm_selection: {
        flex: 1,
        alignItems: "center",
        marginTop: 10
    }
});
