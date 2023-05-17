import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Button
 
} from "react-native";
import Textinputcomponent from "./textinputcomponent/textinput";
import Editgrade from "./editgrade/editgrade";
import Modal from "react-native-modal";
function Edit_Student_info(props) {
  const [name, setname] = React.useState();
  const [familyname, setfamilyname] = React.useState("");
  const [Ncode, setNcode] = React.useState("");
  const [studentcode, setstudentcode] = React.useState("");
  const [schoolclass, set_schoolclass] = React.useState("");
  const [grade, setgrade] = React.useState("");
  const [phonenumber, setphonenumber] = React.useState("");
  const [studentmobile,setstudentmobile] = React.useState("");
  const [dad_mobile, setdad_mobile] = React.useState("");
  const [mom_mobile, setmom_mobile] = React.useState("");
  const [email, setemail] = React.useState("");
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [grademodal,setgradmodal]=useState(false)

  const [inputbackgroundcolor, setinputbackgroundcolor] = useState("#F2F1FE")
  function ONFOCUSFUNC(name) {
    props?.onFocus;
    setinputbackgroundcolor("white")
  }
  function ONBLURFUNC() {
    props?.ONBLUR;
    setinputbackgroundcolor("#F2F1FE")

  }
  function setnamefunc(data)
  {
    setname(data)
  }
  function setfamilynamefunc(data)
  {
    setfamilyname(data)
  }
  function setNcodefunc(data)
  {
    setNcode(data)
  }
  function setstudentcodefunc(data)
  {
    setstudentcode(data)
  }

  function set_schoolclassfunc(data)
  {
    set_schoolclass(data)
  }

  function setNcodefunc(data)
  {
    setNcode(data)
  }
  function setgradefunc(data)
  {
    setgrade(data)
    

  }
  function setphonenumberfunc(data)
  {
    setphonenumber(data)
  }
  function setstudentmobilefunc(data)
  {
    setstudentmobile(data)
  }
  function setdad_mobilefunc(data)
  {
    setdad_mobile(data)
  }
  function setemailfunc(data)
  {
    setemail(data)
  }
  function setmom_mobilefunc(data)
  {
    setmom_mobile(data)
  }
  function setusernamefunc(data)
  {
    setusername(data)
  }
  function setpasswordfunc(data)
  {
    setpassword(data)
  }



  return (
    <View style={styles.maincontainer}>
      <View style={styles.imagecontainer}>
        <Image
          style={{ borderRadius: 35, height: 70, width: 70 }}
          source={require("../../../../../../assets/images/Katina.jpg")}
        />
      </View>
      <ScrollView>
      <Text style={{ fontFamily: "EstedadSemiBold", paddingRight: 30 }}>
        مشخصات فردی
      </Text>
    
      <View style={{height:100}}><Textinputcomponent INSIDE_TEXT={"نام"} RIGHT={"35%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"نام خانوادگی"} VALU={setnamefunc} RIGHT={"28%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"کد ملی"} VALU={setNcodefunc} RIGHT={"32%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"کد دانش آموزی"} VALU={setstudentcodefunc} RIGHT={"25%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"ایمیل"} VALU={setemailfunc} RIGHT={"30%"} /></View>
      <Text style={{ fontFamily: "EstedadSemiBold", paddingRight: "8%" }}>
        مشخصات تحصیلی
      </Text>
      <View style={{ height: 100 }}><Editgrade INSIDE_TEXT={"پایه"} VALU={setgradefunc} GRADE={true} RIGHT={"34%"}/></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"کلاس"} VALU={set_schoolclass} RIGHT={"32%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"کد دانش آموزی"} VALU={setstudentcodefunc} RIGHT={"25%"} /></View>
      <Text style={{ fontFamily: "EstedadSemiBold", paddingRight: "8%" }}>
        اطلاعات تماس
      </Text>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"شماره منزل"} VALU={setphonenumberfunc} RIGHT={"28%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={" موبایل دانش آموز"} VALU={setstudentmobilefunc} RIGHT={"24%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={" موبایل پدر"} VALU={setphonenumberfunc} RIGHT={"30%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={" موبایل مادر"} VALU={setphonenumberfunc} RIGHT={"29%"} /></View>
      <Text style={{ fontFamily: "EstedadSemiBold", paddingRight: "8%" }}>
        اطلاعات کاربری
      </Text>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"نام کاربری"} VALU={setusernamefunc} RIGHT={"29%"} /></View>
      <View style={{ height: 100 }}><Textinputcomponent INSIDE_TEXT={"پسورد"} VALU={setpassword} RIGHT={"29%"} /></View>
      
      <TouchableOpacity style={{ backgroundColor: '#147EFB', padding: 10 ,justifyContent:"center",alignItems:"center",borderRadius:10,marginHorizontal:10,marginBottom:10}}>
        <Text style={{ color: '#fff',fontFamily:"EstedadRegular" }}>ثبت</Text>
      </TouchableOpacity>
        <View style={styles.modaltopcontainer}>
          <Modal
            style={styles.modalcontainer}
            isVisible={grademodal}
            onBackdropPress={() => setModalVisible(false)}
            backdropColor="#c7c8c9"
          >
            <View style={styles.modal}>
      
            </View>
          </Modal>
        </View>
   
      </ScrollView>
    </View>
  );
}
export default Edit_Student_info;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#E9E7FD",
    flex: 1,
  },
  imagecontainer: {
    height: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  inputname: {
    height: 60,
    width: "80%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#BFBFBF",

  },
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
});
