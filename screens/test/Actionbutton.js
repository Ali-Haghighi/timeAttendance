import * as React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {
    StyleSheet,
    TouchableOpacity
} from "react-native";
export default function ActionButton() {
    const { showActionSheetWithOptions } = useActionSheet();
    const openSheet = () => {
      
        const options = ["ویرایش مشخصات", "تغییر کلمه عبور", "حذف", ];
         const icons = [
             <AntDesign name="edit" size={24} color="#4B3FF3" />,
             <Feather name="trash-2" size={24} color="#4B3FF3" />,
             <MaterialIcons name="https" size={24} color="#4B3FF3" />
        ]; 

        const destructiveButtonIndex = 2; //the first element in 'options' will denote the Delete option
        const cancelButtonIndex = 2; //Element number 2 in the array will be the 'Cancel' button

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                destructiveButtonIndex: destructiveButtonIndex,
                // message: "Do you want to delete this draft?",
                // title: "Are you sure?",
                // showSeparators: true,
                containerStyle: styles.container,
                textStyle: styles.text,
                messageTextStyle: styles.message,
                titleTextStyle: styles.title,
                icons, 
            },
            (buttonIndex) => {
                // Do something here depending on the button index selected
            }
        );
    };
    return (
        <TouchableOpacity style={styles.threedot} onPress={openSheet}>
            <Entypo name="dots-three-vertical" size={25} color="black" />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
 
       
    },
    message: {
        backgroundColor: "purple",
        color: "white",
    },
    title: {
        backgroundColor: "yellow",
    },
    text: {
        right:20,
        fontFamily:"EstedadRegular"
    },
    threedot: {

        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"

    }
});