// import React in our code
import React, { useState, useEffect, useRef } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import * as SplashScreen from "expo-splash-screen";
import { Entypo, FontAwesome5, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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
import TeacherActionButton from "../attendance/teacher_actionbuttom/teacher_Actionbutton"
import Filter_Teacher from "./filter_teacher/filter_teacher";
import { Chip } from "react-native-paper";
import Laveaction_bottom from "./leave_actionbottom/leave_acionbottom";

export default function Teacher_Attendance() {
    const [search_Fname_Lname, setsearch_Fname_Lname] = useState("");
    const [search_Ncode, setsearch_Ncode] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [Ncode_enable, set_Ncode_enable] = useState(false);
    const [Fname_Lname_enable, set_Fname_Lname_enable] = useState(false);
    const [heightinfocard, setheightinfocard] = useState();
    useEffect(() => {
        setFilteredDataSource(Dummydata);
        setMasterDataSource(Dummydata);
    }, []);

    const Dummydata = [{
            image: require("../../../../../../assets/images/Katina.jpg"),
            name: "رهام",
            fmilyname: "رحمانی",
            paye: "سوم",
            class: "سه",
            Ncode: "271534687",
            fname_Lname: "رهام رحمانی",
            chips: true,
        },
        {
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
            name: "سام",
            fmilyname: "عبدی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "سام عبدی",
            Ncode: "0157896412",
        },

        {
            image: require("../../../../../../assets/images/Katina.jpg"),
            name: "سام",
            fmilyname: "عبدی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "سام عبدی",
            Ncode: "0157896412",
        },
    ];

    const FirstRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
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
                    TeacherActionButton ID = { item.name }
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
        View >
    );

    const SecondRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
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
                    TeacherActionButton ID = { item.name }
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
        View >
    );
    const ThirdRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
        renderItem = {
            ({ item }) => {
                return ( <
                    View style = { styles.students_infocard_container } >
                    <
                    View style = {
                        styles.students_infocard_heigher
                        // item.chips
                        //   ? styles.students_infocard_heigher
                        //   : styles.students_infocard
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
                    Laveaction_bottom ID = { item.name }
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
                    نوع:
                    <
                    /Text> <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } >
                    <
                    Chip style = { styles.chip_leavekind }
                    onPress = { Fname_Lname_Func }
                    textStyle = {
                        { color: "#027E3A" }
                    } >
                    روزانه <
                    /Chip> < /
                    View > <
                    /View> <
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
                    شرح:
                    <
                    /Text> <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } >
                    <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                        }
                    } >
                    به دلیل بیماری <
                    /Text> < /
                    View > <
                    /View> <
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
                    وضعیت:
                    <
                    /Text> <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } >
                    <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } > {
                        false ? < Chip
                        style = {
                            { backgroundColor: "#EAFBF4" }
                        }
                        onPress = { Fname_Lname_Func }
                        textStyle = {
                            { color: "#027E3A" }
                        } >
                        تایید شده <
                        /Chip> : <
                        Chip
                        style = {
                            { backgroundColor: "#FFEDEA" }
                        }
                        onPress = { Fname_Lname_Func }
                        textStyle = {
                            { color: "#93000A" }
                        } >
                        تایید نشده <
                        /Chip>
                    } <
                    /View> < /
                    View > <
                    /View> <
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
                    /View> < /
                    View > <
                    /View>
                );
            }
        }
        /> < /
        View >
    );
    const FourthRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
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
                    TeacherActionButton ID = { item.name }
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
        View >
    );
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    });

    const searchFilterFunction_Fname_Lname = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function(item) {
                const itemData = item.fname_Lname ?
                    item.fname_Lname.toUpperCase() :
                    "".toUpperCase();
                const textData = text.toUpperCase();
                console.log(itemData.indexOf(textData));
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setsearch_Fname_Lname(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setsearch_Fname_Lname(text);
        }
    };
    const searchFilterFunction_Ncode = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function(item) {
                const itemData = item.Ncode ?
                    item.Ncode.toUpperCase() :
                    "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setsearch_Ncode(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setsearch_Ncode(text);
        }
    };
    const conditional_searchbar = () => {
        if (Ncode_enable) {
            return ( <
                View style = { styles.searchbar } >
                <
                SearchBar rund searchIcon = {
                    { size: 24 }
                }
                onChangeText = {
                    (text) => searchFilterFunction(text)
                }
                onClear = {
                    (text) => searchFilterFunction("")
                }
                placeholder = "جستجو  ..."
                style = { styles.seachbarinside }
                value = { search }
                inputStyle = {
                    {
                        backgroundColor: "#E9E7FD",
                        color: "black",
                        fontFamily: "EstedadRegular",
                        fontSize: 14,
                    }
                }
                inputContainerStyle = {
                    { backgroundColor: "#E9E7FD" }
                }
                containerStyle = { styles.searchcontainer }
                placeholderTextColor = { "grey" }
                selectionColor = { "grey" }
                /> < /
                View >
            );
        }
        if (Fname_Lname_enable) {
            if (Ncode_enable) {
                set_Ncode_enable(false);
            }
            return ( <
                View style = { styles.searchbar } >
                <
                SearchBar rund searchIcon = {
                    { size: 24 }
                }
                onChangeText = {
                    (text) => searchFilterFunction(text)
                }
                onClear = {
                    (text) => searchFilterFunction("")
                }
                placeholder = "جستجوی نام خانوادگی ..."
                style = { styles.seachbarinside }
                value = { search }
                inputStyle = {
                    {
                        backgroundColor: "#E9E7FD",
                        color: "black",
                        fontFamily: "EstedadRegular",
                        fontSize: 14,
                    }
                }
                inputContainerStyle = {
                    { backgroundColor: "#E9E7FD" }
                }
                containerStyle = { styles.searchcontainer }
                placeholderTextColor = { "grey" }
                selectionColor = { "grey" }
                /> < /
                View >
            );
        }
    };
    const N_Code_func = () => {
        set_Ncode_enable(!Ncode_enable);
    };
    const Fname_Lname_Func = () => {
        set_Fname_Lname_enable(!Fname_Lname_enable);
        console.log(Fname_Lname_enable);
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <
            Text style = { styles.itemStyle }
            onPress = {
                () => getItem(item)
            } > { item.id } { "." } { item.name } <
            /Text>
        );
    };

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "غیبت" },
        { key: "second", title: "تاخیر" },
        { key: "third", title: "مرخصی" },
        { key: "fourth", title: "اضافه کاری" },
    ]);
    //  handleIndexChange = (index) => this.setState({index});

    const renderTabBar = (props) => ( <
        TabBar {...props }
        pressColor = "#E9E7FD"
        // onTabPress={({ route, preventDefault }) => { 
        //     preventDefault();
        // }}
        indicatorStyle = {
            { backgroundColor: 'grey' }
        }
        activeColor = { "black" }
        inactiveColor = { "grey" }
        style = {
            { backgroundColor: "#E9E7FD", marginBottom: 20 }
        }
        />
    );
    return ( <
        ActionSheetProvider >
        <
        View style = {
            { flex: 1, backgroundColor: "#E9E7FD" }
        } >
        <
        Filter_Teacher SEARCH_FILTER_FUNCTION_Fname_Lname = { searchFilterFunction_Fname_Lname }
        SEARCH_FILTER_FUNCTION_Ncode = { searchFilterFunction_Ncode }
        SEARCH_Ncode = { search_Ncode }
        SEARCH_fNAME_lNAME = { search_Fname_Lname }
        /> <
        TabView

        navigationState = {
            { index, routes }
        }
        renderScene = { renderScene }
        renderTabBar = { renderTabBar }
        onIndexChange = { setIndex }
        initialLayout = {
            { width: layout.width }
        }
        /> < /
        View > <
        /ActionSheetProvider>
    );
}

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
// import React in our code
import React, { useState, useEffect, useRef } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import * as SplashScreen from "expo-splash-screen";
import { Entypo, FontAwesome5, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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
import TeacherActionButton from "../attendance/teacher_actionbuttom/teacher_Actionbutton"
import Filter_Teacher from "./filter_teacher/filter_teacher";
import { Chip } from "react-native-paper";
import Laveaction_bottom from "./leave_actionbottom/leave_acionbottom";

export default function Teacher_Attendance() {
    const [search_Fname_Lname, setsearch_Fname_Lname] = useState("");
    const [search_Ncode, setsearch_Ncode] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [Ncode_enable, set_Ncode_enable] = useState(false);
    const [Fname_Lname_enable, set_Fname_Lname_enable] = useState(false);
    const [heightinfocard, setheightinfocard] = useState();
    useEffect(() => {
        setFilteredDataSource(Dummydata);
        setMasterDataSource(Dummydata);
    }, []);

    const Dummydata = [{
            image: require("../../../../../../assets/images/Katina.jpg"),
            name: "رهام",
            fmilyname: "رحمانی",
            paye: "سوم",
            class: "سه",
            Ncode: "271534687",
            fname_Lname: "رهام رحمانی",
            chips: true,
        },
        {
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
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
            image: require("../../../../../../assets/images/Katina.jpg"),
            name: "سام",
            fmilyname: "عبدی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "سام عبدی",
            Ncode: "0157896412",
        },

        {
            image: require("../../../../../../assets/images/Katina.jpg"),
            name: "سام",
            fmilyname: "عبدی",
            paye: "سوم",
            class: "سه",
            username: "alihgh",
            fname_Lname: "سام عبدی",
            Ncode: "0157896412",
        },
    ];

    const FirstRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
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
                    TeacherActionButton ID = { item.name }
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
        View >
    );

    const SecondRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
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
                    TeacherActionButton ID = { item.name }
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
        View >
    );
    const ThirdRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
        renderItem = {
            ({ item }) => {
                return ( <
                    View style = { styles.students_infocard_container } >
                    <
                    View style = {
                        styles.students_infocard_heigher
                        // item.chips
                        //   ? styles.students_infocard_heigher
                        //   : styles.students_infocard
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
                    Laveaction_bottom ID = { item.name }
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
                    نوع:
                    <
                    /Text> <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } >
                    <
                    Chip style = { styles.chip_leavekind }
                    onPress = { Fname_Lname_Func }
                    textStyle = {
                        { color: "#027E3A" }
                    } >
                    روزانه <
                    /Chip> < /
                    View > <
                    /View> <
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
                    شرح:
                    <
                    /Text> <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } >
                    <
                    Text style = {
                        {
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                        }
                    } >
                    به دلیل بیماری <
                    /Text> < /
                    View > <
                    /View> <
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
                    وضعیت:
                    <
                    /Text> <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } >
                    <
                    View style = {
                        { flexDirection: "row", flex: 1 }
                    } > {
                        false ? < Chip
                        style = {
                            { backgroundColor: "#EAFBF4" }
                        }
                        onPress = { Fname_Lname_Func }
                        textStyle = {
                            { color: "#027E3A" }
                        } >
                        تایید شده <
                        /Chip> : <
                        Chip
                        style = {
                            { backgroundColor: "#FFEDEA" }
                        }
                        onPress = { Fname_Lname_Func }
                        textStyle = {
                            { color: "#93000A" }
                        } >
                        تایید نشده <
                        /Chip>
                    } <
                    /View> < /
                    View > <
                    /View> <
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
                    /View> < /
                    View > <
                    /View>
                );
            }
        }
        /> < /
        View >
    );
    const FourthRoute = () => ( <
        View >
        <
        FlatList data = { filteredDataSource }
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
                    TeacherActionButton ID = { item.name }
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
        View >
    );
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    });

    const searchFilterFunction_Fname_Lname = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function(item) {
                const itemData = item.fname_Lname ?
                    item.fname_Lname.toUpperCase() :
                    "".toUpperCase();
                const textData = text.toUpperCase();
                console.log(itemData.indexOf(textData));
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setsearch_Fname_Lname(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setsearch_Fname_Lname(text);
        }
    };
    const searchFilterFunction_Ncode = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function(item) {
                const itemData = item.Ncode ?
                    item.Ncode.toUpperCase() :
                    "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setsearch_Ncode(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setsearch_Ncode(text);
        }
    };
    const conditional_searchbar = () => {
        if (Ncode_enable) {
            return ( <
                View style = { styles.searchbar } >
                <
                SearchBar rund searchIcon = {
                    { size: 24 }
                }
                onChangeText = {
                    (text) => searchFilterFunction(text)
                }
                onClear = {
                    (text) => searchFilterFunction("")
                }
                placeholder = "جستجو  ..."
                style = { styles.seachbarinside }
                value = { search }
                inputStyle = {
                    {
                        backgroundColor: "#E9E7FD",
                        color: "black",
                        fontFamily: "EstedadRegular",
                        fontSize: 14,
                    }
                }
                inputContainerStyle = {
                    { backgroundColor: "#E9E7FD" }
                }
                containerStyle = { styles.searchcontainer }
                placeholderTextColor = { "grey" }
                selectionColor = { "grey" }
                /> < /
                View >
            );
        }
        if (Fname_Lname_enable) {
            if (Ncode_enable) {
                set_Ncode_enable(false);
            }
            return ( <
                View style = { styles.searchbar } >
                <
                SearchBar rund searchIcon = {
                    { size: 24 }
                }
                onChangeText = {
                    (text) => searchFilterFunction(text)
                }
                onClear = {
                    (text) => searchFilterFunction("")
                }
                placeholder = "جستجوی نام خانوادگی ..."
                style = { styles.seachbarinside }
                value = { search }
                inputStyle = {
                    {
                        backgroundColor: "#E9E7FD",
                        color: "black",
                        fontFamily: "EstedadRegular",
                        fontSize: 14,
                    }
                }
                inputContainerStyle = {
                    { backgroundColor: "#E9E7FD" }
                }
                containerStyle = { styles.searchcontainer }
                placeholderTextColor = { "grey" }
                selectionColor = { "grey" }
                /> < /
                View >
            );
        }
    };
    const N_Code_func = () => {
        set_Ncode_enable(!Ncode_enable);
    };
    const Fname_Lname_Func = () => {
        set_Fname_Lname_enable(!Fname_Lname_enable);
        console.log(Fname_Lname_enable);
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <
            Text style = { styles.itemStyle }
            onPress = {
                () => getItem(item)
            } > { item.id } { "." } { item.name } <
            /Text>
        );
    };

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "غیبت" },
        { key: "second", title: "تاخیر" },
        { key: "third", title: "مرخصی" },
        { key: "fourth", title: "اضافه کاری" },
    ]);
    //  handleIndexChange = (index) => this.setState({index});

    const renderTabBar = (props) => ( <
        TabBar {...props }
        pressColor = "#E9E7FD"
        // onTabPress={({ route, preventDefault }) => { 
        //     preventDefault();
        // }}
        indicatorStyle = {
            { backgroundColor: 'grey' }
        }
        activeColor = { "black" }
        inactiveColor = { "grey" }
        style = {
            { backgroundColor: "#E9E7FD", marginBottom: 20 }
        }
        />
    );
    return ( <
        ActionSheetProvider >
        <
        View style = {
            { flex: 1, backgroundColor: "#E9E7FD" }
        } >
        <
        Filter_Teacher SEARCH_FILTER_FUNCTION_Fname_Lname = { searchFilterFunction_Fname_Lname }
        SEARCH_FILTER_FUNCTION_Ncode = { searchFilterFunction_Ncode }
        SEARCH_Ncode = { search_Ncode }
        SEARCH_fNAME_lNAME = { search_Fname_Lname }
        /> <
        TabView

        navigationState = {
            { index, routes }
        }
        renderScene = { renderScene }
        renderTabBar = { renderTabBar }
        onIndexChange = { setIndex }
        initialLayout = {
            { width: layout.width }
        }
        /> < /
        View > <
        /ActionSheetProvider>
    );
}

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