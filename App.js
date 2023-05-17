import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, StyleSheet, View } from "react-native";
import Authenticated_Screen from "./screens/authenticated/authenticatedscreen";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
// import Axiosinterceptor from "./interceptors/axiosinteceptor";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User_satus_view from "./screens/authenticated/profiles/manager/users/user_status_view/user_status_view";
import Edit_Student_info from "./screens/authenticated/profiles/manager/users/edit_User_info/edit_student_info";
import Change_password from "./screens/authenticated/profiles/manager/users/change_password/change_password";
import Filter_contextprovider from "./store/context/filterdatacontex";
import Authenticated_contextprovider from "./store/context/authenticated_contex";
import { Authenticated_contex } from "./store/context/authenticated_contex";
import Login from "./screens/unauthenticated/login";
const Stack = createNativeStackNavigator();



export default function App() {

  const [fontsLoaded] = useFonts({
    Estedad: require("./assets/Fonts/Estedad-v5.0/Estedadmain.ttf"),
    EstedadBold: require("./assets/Fonts/Estedad-v5.0/ttf/Estedad-Bold.ttf"),
    EstedadBlack: require("./assets/Fonts/Estedad-v5.0/ttf/Estedad-Black.ttf"),
    EstedadSemiBold: require("./assets/Fonts/Estedad-v5.0/ttf/Estedad-SemiBold.ttf"),
    Mj_Saadi: require("./assets/Fonts/Mj_Saadi/saadi.ttf"),
    Iransans_farsinum: require("./assets/Fonts/IranSansX(Eco)/Farsinumerals/IRANSansFAnumBold.ttf"),
    EstedadRegular: require("./assets/Fonts/Estedad-v5.0/ttf/Estedad-Regular.ttf"),
  });

  const app_auth_context = useContext(Authenticated_contex);
  let contexauth = app_auth_context.isauthenticate;


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
    
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (contexauth == true) {
    return (
      <>
      {console.log("recieve true")}
        <Authenticated_contextprovider>
          <Filter_contextprovider>
            <NavigationContainer onLayout={onLayoutRootView}>
              <Stack.Navigator>
                <Stack.Screen
                  name="home"
                  component={Authenticated_Screen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="اطلاعات دانش آموز"
                  component={User_satus_view}
                  options={{
                    title: "اطلاعات دانش آموزی",
                    headerTitleStyle: {
                      fontFamily: "EstedadRegular",
                      fontSize: 15,
                    },
                    headerStyle: { backgroundColor: "#E9E7FD" },
                  }}
                />
                <Stack.Screen
                  name="edit_student"
                  component={Edit_Student_info}
                  options={{
                    title: "ویرایش اطلاعات",
                    headerTitleStyle: {
                      fontFamily: "EstedadRegular",
                      fontSize: 15,
                    },
                    headerStyle: { backgroundColor: "#E9E7FD" },
                  }}
                />
                <Stack.Screen
                  name="change_password"
                  component={Change_password}
                  options={{
                    title: "تغییر رمز عبور",
                    headerTitleStyle: {
                      fontFamily: "EstedadRegular",
                      fontSize: 15,
                    },
                    headerStyle: { backgroundColor: "#E9E7FD" },
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Filter_contextprovider>
        </Authenticated_contextprovider>
      </>
    );
  }
  if (contexauth == false) {
    return (
      <>
        {console.log("recieve fals")}
        <NavigationContainer onLayout={onLayoutRootView}>
          <Stack.Navigator>
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="home"
              component={Authenticated_Screen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="interceptor"
              component={Axiosinterceptor}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
