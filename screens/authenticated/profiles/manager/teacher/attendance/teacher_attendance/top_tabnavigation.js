import Teacher_abcence from "./teacher_absece";
import Teacher_late from "./teacher_late";
// import React in our code
import React, { useState, useEffect, useRef } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "../../../dashboard/dashboard";
function Top_navigation() {
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
        name="Teacher_abcence"
              component={Teacher_abcence}
        options={{ tabBarLabel: `  غیبت  ${dummydate.absence_date} روز` }}
      />
      <Tab.Screen
        name="تاخیر"
        component={Teacher_late}
        options={{ tabBarLabel: "تاخیر (2 روز - 4ساعت)" }}
      />
      <Tab.Screen
        name="Profile"
        component={Teacher_abcence}
        options={{ tabBarLabel: "مرخصی" }}
      />
      <Tab.Screen
        name="overtime"
        component={Teacher_abcence}
        options={{ tabBarLabel: "اضافه کاری" }}
      />
    </Tab.Navigator>
  );
}
export default Top_navigation;
