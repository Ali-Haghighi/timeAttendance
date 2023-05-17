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
export default function UserActionButton({ ID }) {
    const navigation = useNavigation();
    const { showActionSheetWithOptions } = useActionSheet();
    const [isModalVisible, setModalVisible] = useState(false);
    const [Actionstate, setActionstate] = useState(false);

    function toggleModal() {
        setModalVisible(!isModalVisible);
    }
    function actionsheethandler()
    {
        setActionstate(!Actionstate)
    }
    const openSheet = () => {
        const options = ["مشاهده مشخصات", "ویرایش مشخصات", "تغییر کلمه عبور", "بازگشت","حذف"];
        const icons = [
            <Ionicons name="person-outline" size={24} color="#4B3FF3" />,
            <AntDesign name="edit" size={24} color="#4B3FF3" />,
            <Feather name="trash-2" size={24} color="#4B3FF3" />,
            <AntDesign name="back" size={24} color="#4B3FF3" />,
            <MaterialIcons name="https" size={24} color="#4B3FF3" />,
           
        ];

        const destructiveButtonIndex = 4; //the first element in 'options' will denote the Delete option
     


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
                        navigation.navigate("اطلاعات دانش آموز", { STUDENT_ID: { ID } });
                        break;
                    case 1:
                        navigation.navigate("edit_student")

                        break;
                    case 2:
                        navigation.navigate("change_password")
                        break;
                    case 3:
                        break;
                    case 4:
                        toggleModal();
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
                <View style={styles.modaltopcontainer}>
                    <Modal
                        style={styles.modalcontainer}
                        isVisible={isModalVisible}
                        onBackdropPress={() => setModalVisible(false)}
                        backdropColor="#c7c8c9"
                    >
                        <View style={styles.modal}>
                            <View style={styles.deletesection}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: 30
                                    }}
                                >
                                    {/* <AntDesign name="delete" size={60} color="#DE3730" /> */}
                                    <MaterialIcons name="delete" size={60} color="#DE3730" onPress={actionsheethandler}/>
                                </View>
                                <View
                                    style={{ alignItems: "center", paddingBottom: 20 }}
                                >
                                    <Text style={{ fontFamily: "EstedadRegular" }}>
                                        آیا از حذف دانش آموز اطمینان دارید
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.confirm_selection}>
                                <View style={{ width: "80%", flex: 1 }}>
                                    <Pressable
                                        style={({ pressed }) => [{
                                            backgroundColor: pressed
                                                ? 'white'
                                                : 'red'
                                        }, { width: "100%", height: "100%", borderRadius: 20, alignItems: "center", justifyContent: "center" }]}
                                        onPress={() => console.log("Pressed")}
                                    >

                                        <Text style={{ fontFamily: "EstedadRegular" }}>بله حذف میکنم </Text>

                                    </Pressable>
                                </View>
                                <View style={{ alignItems: "center", paddingVertical: 10, width: "80%", borderRadius: 20, marginTop: 5 }}>
                                    <Pressable
                                        style={({ pressed }) => {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : 'white'
                                        }}
                                        onPress={() => console.log("Pressed")}
                                    >

                                        <Text style={{ fontFamily: "EstedadRegular" }}>انصراف </Text>

                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
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
