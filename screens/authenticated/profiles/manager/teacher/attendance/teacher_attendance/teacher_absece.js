// import React in our code
import React, { useState, useEffect, useRef, useContext } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import * as SplashScreen from "expo-splash-screen";
import { Entypo, FontAwesome5, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Filtercontex } from "../../../../../../../store/context/filterdatacontex";
import {
    Animated,
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    ScrollView,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    useWindowDimensions,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
// import Filter_Teacher from "./filter_teacher/filter_teacher";
import Manager_teacher_action from "./manager_teacher_actionbuttom/manager_teacher_absenceActionbutton";
import { Chip } from "react-native-paper";
// import Laveaction_bottom from "./leave_actionbottom/leave_acionbottom";

function Teacher_abcence() {
    const [search_Fname_Lname, setsearch_Fname_Lname] = useState("");
    const [search_Ncode, setsearch_Ncode] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [Ncode_enable, set_Ncode_enable] = useState(false);
    const [Fname_Lname_enable, set_Fname_Lname_enable] = useState(false);
    const [heightinfocard, setheightinfocard] = useState();
    const [flatlist_data, set_flatlist_data] = useState();

    const tch_absence_filter_context = useContext(Filtercontex);
    const flatlist_filter = tch_absence_filter_context.filter_abcent;

    const N_Code_func = () => {
        set_Ncode_enable(!Ncode_enable);
    };
    const Fname_Lname_Func = () => {
        set_Fname_Lname_enable(!Fname_Lname_enable);
        console.log(Fname_Lname_enable);
    };


    const Dummydata = [{
            image: require("../../../../../../../assets/images/Katina.jpg"),
            name: "آروین",
            fmilyname: "رحمانی",
            paye: "سوم",
            class: "سه",
            Ncode: "271534687",
            fname_Lname: "رهام رحمانی",
            chips: true,
        },
        {
            image: require("../../../../../../../assets/images/Katina.jpg"),
            name: "حسین",
            fmilyname: "حسابی",
            paye: "چهارم",
            class: "سه",
            username: "javadjj",
            fname_Lname: "حسین حسابی",
            Ncode: "0159874632",
            chips: false,
        },
        {
            image: require("../../../../../../../assets/images/Katina.jpg"),
            name: "مریم",
            fmilyname: "حسنی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "مریم حسنی",
            Ncode: "2589641398",
            chips: true,
        },
        {
            image: require("../../../../../../../assets/images/Katina.jpg"),
            name: "رهام",
            fmilyname: "رحمانی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "رهام رحمانی",
            Ncode: "2758964137",
            chips: true,
        },
        {
            image: require("../../../../../../../assets/images/Katina.jpg"),
            name: "رهام",
            fmilyname: "رحمانی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "رهام رحمانی",
            Ncode: "2740896547",
            chips: true,
        },
        {
            image: require("../../../../../../../assets/images/Katina.jpg"),
            name: "سام",
            fmilyname: "عبدی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "سام عبدی",
            Ncode: "0157896412",
        },

        {
            image: require("../../../../../../../assets/images/Katina.jpg"),
            name: "سام",
            fmilyname: "عبدی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "سام عبدی",
            Ncode: "0157896412",
        },
    ];

    return ( < View style = {
            { flex: 1, backgroundColor: "#E9E7FD" }
        } >
        <
        ActionSheetProvider >
        <
        FlatList data = { flatlist_filter }
        renderItem = {
            ({ item }) => {
                return ( <
                    View style = { styles.students_infocard_container } >
                    <
                    View style = {
                        item.chips ?
                        styles.students_infocard_heigher : styles.students_infocard
                    } >
                    <
                    View style = { styles.pic_more_button_container } >
                    <
                    View style = { styles.pic_part_info } >
                    <
                    View style = { styles.profile_img_text } >
                    <
                    Image source = { item.image }
                    style = { styles.profileimage }
                    /> <
                    Text style = {
                        {
                            marginLeft: 10,
                            fontFamily: "EstedadRegular",
                            fontSize: 14,
                        }
                    } > { item.name } <
                    /Text> <
                    Text style = {
                        {
                            marginLeft: 5,
                            fontFamily: "EstedadRegular",
                            fontSize: 14,
                        }
                    } > { item.fmilyname } <
                    /Text> < /
                    View > <
                    /View> <
                    View style = { styles.threedot_container } > { /* <View style={styles.threedot} onPress={console.log("salam")}></View> */ } <
                    Manager_teacher_action ID = { item.name }
                    /> < /
                    View > <
                    /View> <
                    View style = { styles.infocontainer } >
                    <
                    View style = {
                        { flexDirection: "row" }
                    } >
                    <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 25,
                        }
                    } >
                    پایه:
                    <
                    /Text> <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                        }
                    } > { item.paye } <
                    /Text> < /
                    View > <
                    View style = {
                        { flexDirection: "row" }
                    } >
                    <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 25,
                        }
                    } >
                    کلاس:
                    <
                    /Text> <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                        }
                    } > { item.class } <
                    /Text> < /
                    View > <
                    View style = {
                        { flexDirection: "row" }
                    } >
                    <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 25,
                        }
                    } >
                    کد ملی:
                    <
                    /Text> <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                        }
                    } > { item.Ncode } <
                    /Text> < /
                    View > <
                    View style = {
                        { flexDirection: "row" }
                    } >
                    <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            paddingRight: 10,
                            fontSize: 15,
                            paddingRight: 25,
                        }
                    } >
                    وضعیت پیامک:
                    <
                    /Text> <
                    MaterialCommunityIcons style = {
                        { marginTop: 10, marginLeft: 5 }
                    }
                    name = "send-check"
                    size = { 14 }
                    color = "#09AA57" /
                    >
                    <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",

                            paddingRight: 5,
                            fontSize: 15,
                            color: "#09AA57",
                        }
                    } >
                    ارسال شده <
                    /Text> < /
                    View > <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } > {
                        item.chips && ( <
                            Chip style = { styles.chip_absentrequest }
                            onPress = { Fname_Lname_Func } >
                            در خواست حذف به دلیل فراموشی کارت <
                            /Chip>
                        )
                    } <
                    /View> < /
                    View > <
                    /View> < /
                    View >
                );
            }
        }
        /> < /
        ActionSheetProvider > <
        /View>)

    }
    export default Teacher_abcence

    const styles = StyleSheet.create({
        student_main_container: {
            flex: 1,
        },
        studentview_total: {
            backgroundColor: "#E9E7FD",
        },
        searchbar: {
            backgroundColor: "#E9E7FD",
        },
        seachbarinside: {},
        searchcontainer: {
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: 350,
            backgroundColor: "#E9E7FD",
            borderWidth: 1, //no effect
            shadowColor: "#E9E7FD", //no effect
            borderBottomColor: "grey",
            borderTopColor: "grey",
            left: 30,
            borderRadius: 10,
            selectionColor: "white",
        },
        itemStyle: {
            padding: 10,
        },
        chipcontainer: {
            flexDirection: "row",
            marginBottom: 20,
        },
        chipfilter: {
            backgroundColor: "#EFECF3",
            height: 40,
            width: 90,
            marginTop: 10,
            left: 30,
            fontFamily: "EstedadSemiBold",
            marginLeft: 5,
            borderRadius: 30,
        },
        student_info_flatlist: {
            top: 20,
        },
        students_infocard_container: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E9E7FD",
        },
        students_infocard: {
            height: 250,
            width: 350,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 20,
        },
        students_infocard_heigher: {
            height: 280,
            width: 350,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 20,
        },
        pic_more_button_container: {
            height: 70,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            flexDirection: "row",
        },
        pic_part_info: {
            height: 70,
            width: 175,
        },
        profileimage: {
            height: 50,
            width: 50,
            borderRadius: 40,
            marginLeft: 16,
            marginTop: 10,
        },
        profile_img_text: {
            flexDirection: "row",
            alignItems: "center",
        },
        actionsheet_container: {
            height: 80,
        },
        threedot_container: {
            alignItems: "flex-end",
            width: 175,
        },
        threedot: {
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
        },
        infocontainer: {
            flexDirection: "column",
            height: 110,
            width: 350,
        },
        tabBar: {
            flexDirection: "row",
        },
        tabItem: {
            flex: 1,
            alignItems: "center",
            padding: 16,
        },
        chip_absentrequest: {
            backgroundColor: "#EFECF3",
            height: 40,

            marginTop: 10,
            left: 30,
            fontFamily: "EstedadSemiBold",
            marginLeft: 5,
            borderRadius: 30,
        },
        chip_leavekind: {
            backgroundColor: "#EAFBF4",
            borderRadius: 10

        }
    });