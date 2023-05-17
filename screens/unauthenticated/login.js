// import React in our code
import React, { useState, useEffect, useRef, useContext } from "react";
import { axiosinterceptor } from "../../interceptors/axiosinteceptor";
import { Button } from "react-native-paper";
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
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import Logintext_input from "./logintextinput/logintextinput";
// import { Axiosinterceptor } from "../interceptors/axiosinteceptor";
import { useNavigation } from "@react-navigation/native";
import Authenticated_contextprovider from "../../store/context/authenticated_contex";
import { Authenticated_contex } from "../../store/context/authenticated_contex";
import axios from "../../interceptors/axiosinteceptor";
function Login({ props }) {

  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const width_window = () => {
    Dimensions.get("window").width;
  };
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  const [inputbackgroundcolor, setinputbackgroundcolor] = useState("#F2F1FE");
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const app_auth_context = useContext(Authenticated_contex);
  let token = app_auth_context.userData.access_token;
  let refresh = app_auth_context.userData.refresh_token;
  function ONFOCUSFUNC() {
    props?.onFocus;
    setinputbackgroundcolor("white");
  }
  function ONBLURFUNC() {
    props?.ONBLUR;
    setinputbackgroundcolor("#F2F1FE");
  }
  const usernamefunc = (data) => {
    setusername(data);
  };
  const passfunc = (data) => {
    setpassword(data);
  };
//function call when press login 
  const LoginpressFunc = async () => {
    try {
      const response = axiosinterceptor({
        url: "login/",
        method: "post",
        data: {
          username: "",
          password: "",
        },
      }).then((res) => {
        if (res.status===200) {
         
          app_auth_context.isauthenticate = !(app_auth_context.isauthenticate)
          app_auth_context.userData = { access_token: res.data.access_token, refresh_token: res.data.refresh_token }
          app_auth_context.refreshstate()
          navigation.navigate("home");
          setInterval(() => { 
            let token = app_auth_context.userData.access_token;
            let refresh = app_auth_context.userData.refresh_token;
            const response = axiosinterceptor({
              url: "user/",
              method: "get",
              headers: { Authorization: `Bearer ${token}` }
            }).then((res) => {console.log(res.status)
            if(res.status===401)
            {
              const response = axiosinterceptor({
                url: "token/refresh/",
                method: "post",
                headers: { Authorization: `Bearer ${refresh}` }
              }).then((res) => {
                
                console.log(res.expires, res.data.access, res.access_token_expiration, res.Date)
                token = res.data.access
                app_auth_context.userData.access_token=token
                console.log(app_auth_context.userData.access_token)
            })
            
            }})
 
          }, 2000)
        
        }
        if(res.status===400)
        {
          Alert.alert("problem")
        }
      });
    } catch (error) {
      console.log(error, "error of login");
    }
  };

  const viewfunc = () => {
  
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E9E7FD",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 300,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logintext_input
          VALU={usernamefunc}
          PLACEHOLDER={"نام کاربری"}
          PASS={false}
        />
        <Logintext_input VALU={passfunc} PLACEHOLDER={"پسورد"} PASS={true} />
        <Button
          labelStyle={{ fontFamily: "EstedadRegular" }}
          style={styles.submitbtn}
          mode="contained"
          onPress={LoginpressFunc}
        >
          ورود
        </Button>
        <Button
          labelStyle={{ fontFamily: "EstedadRegular" }}
          style={styles.submitbtn}
          mode="contained"
          onPress={viewfunc}
        >
          مشاهده
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputname: {
    height: 60,
    width: "100%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#BFBFBF",
    fontFamily: "EstedadRegular",
  },
  submitbtn: {
    backgroundColor: "#1B0ED8",
    width: "100%",
    height: 60,
    borderRadius: 10,
    marginTop: 15,
    fontFamily: "EstedadRegular",
    justifyContent: "center",
  },
});
export default Login;
