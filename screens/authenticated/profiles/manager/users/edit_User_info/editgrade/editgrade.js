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
  Button,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import Modal from "react-native-modal";

function Editgrade({ INSIDE_TEXT, props, VALU, RIGHT, GRADE }) {

  const [inputbackgroundcolor, setinputbackgroundcolor] = useState("#F2F1FE");
  const [changevalue, set_changevalue] = useState();
  const [grade_modal, set_grade_modal] = useState(false);
  const [checked, setChecked] = React.useState("");
  const [refresh, setrefresh] = useState(false)
  useEffect(() => {
    console.log(checked)
  }, [refresh]);
  const refreshfunc = () => {
    setrefresh(!refresh)
  
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "EstedadSemiBold",
            right: RIGHT,
            top: "12%",
            zIndex: 1,
            color: "#595959"
          }}
        >
          {INSIDE_TEXT}
        </Text>
        <TouchableOpacity
      
          style={{
            height: 60,
            width: "80%",
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            borderColor: "#BFBFBF",
            fontFamily: "EstedadRegular",
            backgroundColor: "#F2F1FE",
            marginBottom: "13%"
            
          }}
          onPress={() => { set_grade_modal(true) }}
        >
          <Text>{checked}</Text>

        </TouchableOpacity></View>

      <View style={styles.modaltopcontainer}>
        <Modal
          style={styles.modalcontainer}
          isVisible={grade_modal}
          onBackdropPress={() => set_grade_modal(false)}
          backdropColor="#c7c8c9"
        >
          <View style={styles.modal}>
            <TouchableOpacity

              style={styles.canclesection}
              onPress={() => {
                set_grade_modal(false);
                
              }}
            >
              <Ionicons name="chevron-up-circle-outline" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.gradesection_modal}>
              <ScrollView>
                <TouchableOpacity
                  style={styles.radioandtext}
                  onPress={(e) => { setChecked("اول"), refreshfunc(), VALU(checked),set_grade_modal(false) }}
                >
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 15,
                        fontFamily: "EstedadRegular",
                      }}
                    >
                    اول
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end", justifyContent: "center" }}>
                    <RadioButton
                      value="first"
                      status={checked === "اول" ? "checked" : "unchecked"}
                      onPress={(e) => { setChecked("اول"), refreshfunc(), VALU(checked), set_grade_modal(false) }}
                      color="#E65400"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.radioandtext}
                  onPress={(e) => { setChecked("دوم"), refreshfunc(), VALU(checked), set_grade_modal(false) }}
                >
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 15,
                        fontFamily: "EstedadRegular",
                      }}
                    >
                       دوم
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end", justifyContent: "center" }}>
                    <RadioButton
                      value="دوم"
                      status={checked === "دوم" ? "checked" : "unchecked"}
                      onPress={(e) => { setChecked("دوم"), refreshfunc(), VALU(checked), set_grade_modal(false) }}
                      color="#E65400"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.radioandtext}
                  onPress={(e) => { setChecked("سوم"), refreshfunc(), VALU(checked), set_grade_modal(false) }}
                >
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 15,
                        fontFamily: "EstedadRegular",
                      }}
                    >
                      پایه سوم
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end", justifyContent: "center" }}>
                    <RadioButton
                      value="third"
                      status={checked === "سوم" ? "checked" : "unchecked"}
                      onPress={(e) => { setChecked("سوم"), refreshfunc(), VALU(checked), set_grade_modal(false) }}
                      color="#E65400"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.radioandtext}
                  onPress={(e) => { setChecked("پایه چهارم"), refreshfunc(), VALU(checked) }}
                >
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 15,
                        fontFamily: "EstedadRegular",
                      }}
                    >
                      پایه چهارم
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end", justifyContent: "center" }}>
                    <RadioButton
                      value="forth"
                      status={checked === "forth" ? "checked" : "unchecked"}
                      onPress={(e) => { setChecked("پایه چهارم"), VALU(checked) }}
                      color="#E65400"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.radioandtext}
                  onPress={(e) => { setChecked("پایه پنجم"), VALU(checked) }}
                >
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 15,
                        fontFamily: "EstedadRegular",
                      }}
                    >
                      پایه پنجم
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end", justifyContent: "center" }}>
                    <RadioButton
                      value="fifth"
                      status={checked === "fifth" ? "checked" : "unchecked"}
                      onPress={(e) => { setChecked("پایه پنجم"), VALU(checked) }}
                      color="#E65400"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.radioandtext}
                  onPress={(e) => { setChecked("پایه ششم"), VALU(checked) }}
                >
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 15,
                        fontFamily: "EstedadRegular",
                      }}
                    >
                      پایه ششم
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end", justifyContent: "center" }}>
                    <RadioButton
                      value="sixth"
                      status={checked === "sixth" ? "checked" : "unchecked"}
                      onPress={(e) => { setChecked("پایه ششم"), VALU(checked) }}
                      color="#E65400"
                    />
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#E9E7FD",
    flex: 1,
  },
  imagecontainer: {
    height: "15%",
    backgroundColor: "red",
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
    fontFamily: "EstedadRegular",
  },
  modaltopcontainer: {
    margin: 0,
  },
  modalcontainer: {
    flex: 1,
    padding: 0,
    marginHorizontal: 10,
    marginVertical: 0,
    justifyContent: "flex-end",
  },
  modal: {
    borderRadius: 10,
    backgroundColor: "white",
    height: "55%",
    borderRadius: 10,
    marginHorizontal: -5,
  },
  canclesection: {
    height: "12%",
    padding: 5,
    alignItems: "center"
  },
  gradesection_modal: {
    height: "85%",
    backgroundColor: "white",
    padding: 5,
  },
  radioandtext: {
    flexDirection: "row",
    paddingHorizontal: 5
  },
});

export default Editgrade;
