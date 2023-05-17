import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import DrawerComponent from "./Drawer/Drawer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dashboard from "./profiles/manager/dashboard/dashboard";
import { Entypo } from "@expo/vector-icons";
import User_Adminview from "./profiles/manager/users/user_adminview";
import Login from "../unauthenticated/login";
import Edit_Student_info from "./profiles/manager/users/edit_User_info/edit_student_info";
import Editgrade from "./profiles/manager/users/edit_User_info/editgrade/editgrade";
import Teacher_Attendance from "./profiles/manager/teacher/attendance/teacher_attendance";

import Teacherattendance from "./profiles/manager/teacher/attendance/teacher_attendance/teacherattendancemain";

function Authenticated_Screen() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerComponent {...props} />}
      screenOptions={{ drawerLabelStyle: { marginLeft: -25 } }}
    >
      <Drawer.Screen
        name="خانه"
        component={Dashboard}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Entypo name="home" size={24} color="grey" />
          ),
          // headerTitle: ''
          headerStyle: {
            backgroundColor: "#E9E7FD",
          },
        }}
      />
      <Drawer.Screen
        name="کاربران"
        component={User_Adminview}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="md-school" size={24} color="grey" />
          ),
          // headerTitle: ''
          headerStyle: {
            backgroundColor: "#E9E7FD",
          },
        }}
      />
      <Drawer.Screen
        name="معلم"
        component={Teacherattendance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="group" size={24} color="grey" />
          ),
          headerStyle: {
            backgroundColor: "#E9E7FD",
          },
        }}
      />
      <Drawer.Screen
        name="کلاس"
        component={Login}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="groups" size={24} color="grey" />
          ),
          headerStyle: {
            backgroundColor: "#E9E7FD",
          },
        }}
      />
      <Drawer.Screen
        name="پایه"
        component={Teacherattendance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="sort" size={24} color="grey" />
          ),
        }}
      />
      <Drawer.Screen
        name="تنظیم برنامه کلاس"
        component={Teacherattendance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Feather name="grid" size={24} color="grey" />
          ),
          headerStyle: {
            backgroundColor: "#E9E7FD",
          },
        }}
      />
      <Drawer.Screen
        name="حضوروغیاب دانش آموزها"
        component={Teacherattendance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="library-add-check" size={24} color="grey" />
          ),
        }}
      />
      <Drawer.Screen
        name="حضوروغیاب معلم ها "
        component={Teacherattendance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="library-add-check" size={24} color="grey" />
          ),
        }}
      />
      <Drawer.Screen
        name="حضوروغیاب من "
        component={Teacherattendance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="checkbox-outline"
              size={24}
              color="grey"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="خروج از حساب کاربری"
        component={Teacherattendance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="logout" size={24} color="grey" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default Authenticated_Screen;
