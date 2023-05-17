import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    ScrollView,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";

function User_satus_view({ route }) {
    const Route = route.params.STUDENT_ID;



    return (

        <
        View style = { styles.page_container } >
        <
        View style = { styles.personal_info } >
        <
        View style = { styles.info_main } >
        <
        View style = { styles.info } >
        <
        Image style = {
            { left: 10, width: 70, height: 70, borderRadius: 50, marginTop: 5 }
        }
        source = { require("../../../../../../assets/images/Katina.jpg") } >
        <
        /Image> <
        Text style = {
            {
                fontFamily: "EstedadSemiBold",
                paddingRight: 10,
                fontSize: 17,
            }
        } >
        رهام رحمانی <
        /Text> <
        View style = {
            { flexDirection: "column" }
        } >
        <
        View style = {
            { flexDirection: "row" }
        } >
        <
        Text style = {
            {
                fontFamily: "EstedadRegular",
                paddingRight: 10,
                fontSize: 17,
            }
        } >
        کد دانش آموزی:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 5,
                fontSize: 17,
            }
        } >
        275222 <
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
                fontSize: 17,
            }
        } >
        شماره موبایل:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 25,
                fontSize: 17,
            }
        } >
        09146523498 <
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
                fontSize: 17,
            }
        } >
        پایه:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 5,
                fontSize: 17,
            }
        } >
        سوم <
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
                fontSize: 17,
            }
        } >
        کلاس:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 5,
                fontSize: 17,
            }
        } >
        چهارم <
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
                fontSize: 17,
            }
        } >
        نام کاربری:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 5,
                fontSize: 17,
            }
        } >
        alihgh <
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
                fontSize: 17,
            }
        } >
        ایمیل <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 5,
                fontSize: 17,
            }
        } >
        ali @gmail.com <
        /Text> < /
        View > <
        /View> < /
        View > <
        /View> < /
        View > <
        View style = { styles.status_summary_container } >
        <
        View style = { styles.status_summary } >
        <
        Text style = {
            { fontFamily: "EstedadSemiBold", paddingRight: 10, fontSize: 15 }
        } > خلاصه وضعیت < /Text> <
        View style = {
            { flexDirection: "row" }
        } >
        <
        Text style = {
            {
                fontFamily: "EstedadRegular",
                paddingRight: 10,
                fontSize: 17,
            }
        } >
        غیبت:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 25,
                fontSize: 17,
            }
        } >
        5 روز <
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
                fontSize: 17,
            }
        } >
        تاخیر:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "Iransans_farsinum",
                paddingTop: 5,
                paddingRight: 25,
                fontSize: 17,
            }
        } >
        10 روز(14 ساعت) <
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
                fontSize: 17,
            }
        } >
        آخرین غیبت <
        /Text> <
        Text style = {
            {
                fontFamily: "EstedadRegular",

                paddingRight: 25,
                fontSize: 17,
                color: "blue"
            }
        } >
        مشاهده همه غیبت ها <
        /Text> < /
        View > <
        View style = {
            { backgroundColor: "white", alignItems: "center" }
        } >
        <
        View style = {
            [styles.lastabsent, styles.lastabsentelevation]
        } > < Text style = {
            { fontFamily: "Iransans_farsinum", left: 10, fontSize: 15 }
        } > چهارشنبه 23 آذر - رهام رحمانی < /Text> <
        View style = {
            { flexDirection: "row", marginTop: 20 }
        } >
        <
        Text style = {
            {
                fontFamily: "EstedadRegular",
                paddingRight: 10,
                fontSize: 17,
            }
        } >
        شرح:
        <
        /Text> <
        Text style = {
            {
                fontFamily: "EstedadRegular",

                paddingRight: 5,
                fontSize: 17,
                backgroundColor: "#EFECF3",
                paddingLeft: 14,
                paddingRight: 14,
                borderRadius: 30
            }
        } >
        نیازمند افزودن شرح <
        /Text> < /
        View > <
        View style = {
            { flexDirection: "row", marginTop: 20 }
        } >
        <
        Text style = {
            {
                fontFamily: "EstedadRegular",
                paddingRight: 10,
                fontSize: 17,
            }
        } >
        وضعیت پیامک:
        <
        /Text> <
        MaterialCommunityIcons style = {
            { marginTop: 10, marginLeft: 5 }
        }
        name = "send-check"
        size = { 15 }
        color = "#09AA57" / >
        <
        Text style = {
            {
                fontFamily: "EstedadRegular",

                paddingRight: 5,
                fontSize: 17,
                color: "#09AA57"
            }
        } >
        ارسال شده <
        /Text> < /
        View >

        <
        /View> < /
        View > <
        /View> < /
        View > <
        /View >
    );
}

export default User_satus_view;

const styles = StyleSheet.create({
    page_container: {
        flex: 1,
        backgroundColor: "#E9E7FD",
    },
    personal_info: {
        // backgroundColor: "red",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
    },
    info_main: {
        backgroundColor: "white",
        paddingBottom: 20,
        width: 350,
        borderRadius: 20,
    },
    status_summary_container: {
        // backgroundColor: "yellow",
        height: 400,
        alignItems: "center",
    },
    status_summary: {
        backgroundColor: "white",
        width: 350,
        borderRadius: 20,
        flexDirection: "column",
        paddingBottom: 20
    },
    lastabsent: {
        padding: 20,
        paddingHorizontal: 30,
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 8,

    },
    lastabsentelevation: {
        shadowColor: '#150BA8',
        elevation: 3,
    }
});