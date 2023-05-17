// import React in our code
import React, { useState, useEffect, useRef } from "react";

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
} from "react-native";
function Logintext_input({ props, VALU, PLACEHOLDER, PASS }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const width_window = () => {
    Dimensions.get("window").width;
  };
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  const [inputbackgroundcolor, setinputbackgroundcolor] = useState("#F2F1FE");

  function ONFOCUSFUNC() {
    props?.onFocus;
    setinputbackgroundcolor("white");
  }
  function ONBLURFUNC() {
    props?.ONBLUR;
    setinputbackgroundcolor("#F2F1FE");
  }

  return (
    <View style={{ width: "100%", marginVertical: 15 }}>
      <TextInput
        secureTextEntry={PASS}
        onFocus={ONFOCUSFUNC}
        onBlur={ONBLURFUNC}
        selectionColor="grey"
        style={[{ backgroundColor: inputbackgroundcolor }, styles.inputname]}
        onChangeText={(txt) => VALU(txt)}
        placeholder={PLACEHOLDER}
      />
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
});
export default Logintext_input;
