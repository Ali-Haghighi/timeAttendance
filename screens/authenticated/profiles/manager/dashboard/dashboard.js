import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Dashboard = () => {
  return (
    <View style={styles.loginmainscreen}>
      <View style={styles.containerdateview}>
        <View style={styles.dateview}>
          <View style={styles.calendericon}>
            <AntDesign name="calendar" size={36} color="#FFFFFF" />
          </View>
          <View style={styles.todaydate}>
            <Text style={styles.today_text}>چهارشنبه 23 آذر 1401</Text>
          </View>
          <View style={styles.timenow}></View>
        </View>
      </View>
      <View style={styles.Today_absents_late_main}>
        <View style={styles.Today_absents_late}>
          <View style={styles.today_absence_main}>
            <View style={styles.today_absence}>
              <Text style={styles.today_absence_text}>غایب های امروز</Text>
              <Text style={styles.today_absence_text}>12 نفر</Text>
            </View>
          </View>
          <View style={styles.today_late_main}>
            <View style={styles.today_late}>
              <Text style={styles.today_late_text}>متاخرین امروز</Text>
              <Text style={styles.today_late_text}>12 نفر</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.absence_need_accept_main}>
        <View style={styles.absence_need_accept}>
            <View style={styles.absence_need_accept_flag}></View>
            <View style={styles.absence_need_accept_textbox}>
                <Text style={{fontFamily:"Iransans_farsinum",fontSize:21,color:"grey"}}>2</Text>
                <Text style={{fontFamily:"Iransans_farsinum",fontSize:16,color:"black"}}>غیبت نیازمند ثبت مرخصی</Text>
            </View>
        </View>
      </View>
      <View style={styles.absence_need_accept_main}>
        <View style={styles.absence_need_accept}>
            <View style={styles.absence_need_accept_flag_leave}></View>
            <View style={styles.absence_need_accept_textbox}>
                <Text style={{fontFamily:"Iransans_farsinum",fontSize:21,color:"grey"}}>21</Text>
                <Text style={{fontFamily:"Iransans_farsinum",fontSize:16,color:"black"}}> مرخصی های نیازمند تایید</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginmainscreen: {
    flex: 1,
    backgroundColor: "#E9E7FD",
    flexDirection: "column",
  },
  containerdateview: {
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  dateview: {
    flexDirection: "row",
    top: 30,
    height: 70,
    width: 300,

    justifyContent: "space-between",
    borderRadius: 20,
  },
  calendericon: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B3FF3",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  todaydate: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "#FFFFFF",
    borderBottomEndRadius:10,
    borderTopEndRadius:10
  },
  today_text: {
    fontFamily: "Iransans_farsinum",
  },
  timenow: {
    flex: 0,
    height: 70,
    backgroundColor: "white",
  },
  Today_absents_late_main: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  Today_absents_late: {
    flexDirection: "row",
    height: 150,
    width: 300,
  },
  today_absence_main: {
    flex: 3,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  today_absence: {
    height: 100,
    width: 130,
    backgroundColor: "#FFEFE5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  today_late_main: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  today_late: {
    height: 100,
    width: 130,
    backgroundColor: "#FFEFE5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  today_absence_text: {
    fontFamily: "Iransans_farsinum",
    fontSize: 12,
  },
  today_late_text: {
    fontFamily: "Iransans_farsinum",
    fontSize: 12,
  },
  absence_need_accept_main: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  absence_need_accept: {
    height: 60,
    backgroundColor: "white",
    width: 300,
    borderRadius: 10,
    flexDirection:"row"
  },
  absence_need_accept_flag:
  {
    height:60,
    backgroundColor:"#09AA57",
    width:10,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10
  },
  absence_need_accept_textbox:
  {
    flexDirection:"row",
    height:60,
   
    width:290,
    justifyContent:"center",
    alignItems:"center"
  },
  absence_need_accept_flag_leave:
  {
    height:60,
    backgroundColor:"#F2C94C",
    width:10,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10
  }
});

export default Dashboard;
