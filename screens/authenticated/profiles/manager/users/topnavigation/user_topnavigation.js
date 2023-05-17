
import Teacher_late from "../../teacher/attendance/teacher_attendance/teacher_late";

// import React in our code
import React, { useState, useEffect, useRef } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "../../dashboard/dashboard";
function User_Topnavigation() {
  const Tab = createMaterialTopTabNavigator();
  useEffect(() => {}, []);
  const dummydate = {
    absence_date: 3,
  };
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarPressColor: "#E9E7FD",
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#E9E7FD" },
      }}
    >
      <Tab.Screen
        name="salam"
        component={Dashboard}
        options={{ tabBarLabel: `  غیبت  ${dummydate.absence_date} روز` }}
      />
      <Tab.Screen
        name="تاخیر"
        component={Teacher_late}
        options={{ tabBarLabel: "تاخیر (2 روز - 4ساعت)" }}
      />
      <Tab.Screen
        name="Profile"
        component={Dashboard}
        options={{ tabBarLabel: "مرخصی" }}
      />
      <Tab.Screen
        name="overtime"
        component={Dashboard}
        options={{ tabBarLabel: "اضافه کاری" }}
      />
    </Tab.Navigator>
  );
}
export default User_Topnavigation;
