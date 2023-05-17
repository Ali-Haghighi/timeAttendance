// function Student_Adminview(){

// }
// export default Student_Adminview;
// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect, useRef } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import * as SplashScreen from "expo-splash-screen";
// import StudentActionButton from "./main_actionbuttom/Student_Actionbutton";
import { Entypo, FontAwesome5, Feather, Ionicons } from "@expo/vector-icons";



// import all the components we are going to use
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
import { SearchBar } from "react-native-elements";
import { Chip } from "react-native-paper";
import { Button, Menu, Divider, Provider } from "react-native-paper";
// import Filter_Teacher from "../Filters_teacher/filter_teacher";
import TeacherActionButton from "../teacher_attendance/manager_teacher_actionbuttom/manager_teacher_absenceActionbutton";



const Teacher_abcence = ({ Press }) => {
  const [search_Fname_Lname, setsearch_Fname_Lname] = useState("");
  const [search_Ncode,setsearch_Ncode] =useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [Ncode_enable, set_Ncode_enable] = useState(false);
  const [Fname_Lname_enable, set_Fname_Lname_enable] = useState(false);
  function press()
  {
    console.log("hello")
  }
  const Dummydata = [
    {
      image: require("../../../../../../assets/images/Katina.jpg"),
      name: "علی",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      Ncode: "271534687",
      fname_Lname: "علی حسنی"
    },
    {
      image: require("../../../../../../assets/images/Katina.jpg"),
      name: "حسین",
      fmilyname: "حسابی",
      paye: "چهارم",
      class: "سه",
      username: "javadjj",
      fname_Lname: "حسین حسابی",
      Ncode: "0159874632",
    },
    {
      image: require("../../../../../../assets/images/Katina.jpg"),
      name: "مریم",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "مریم حسنی",
      Ncode: "2589641398",

    },
    {
      image: require("../../../../../../assets/images/Katina.jpg"),
      name: "علی",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "علی حسنی",
      Ncode: "2758964137"
    },
    {
      image: require("../../../../../../assets/images/Katina.jpg"),
      name: "علی",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "علی حسنی",
      Ncode: "2740896547"
    },
    {
      image: require("../../../../../../assets/images/Katina.jpg"),
      name: "جواد",
      fmilyname: "عبدی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "سام عبدی",
      Ncode: "0157896412"
    },
  ];

  useEffect(() => {


    setFilteredDataSource(Dummydata);
    setMasterDataSource(Dummydata);




  }, []);

  const searchFilterFunction_Fname_Lname = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.fname_Lname
          ? item.fname_Lname.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        console.log(itemData.indexOf(textData))
        return itemData.indexOf(textData) > -1;

      });
      setFilteredDataSource(newData);
      setsearch_Fname_Lname(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setsearch_Fname_Lname(text);
    }
  };
  const searchFilterFunction_Ncode = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Ncode
          ? item.Ncode.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;

      });
      setFilteredDataSource(newData);
      setsearch_Ncode(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setsearch_Ncode(text);
    }
  };
  const conditional_searchbar = () => {


    if (Ncode_enable) {
      return (
        <View style={styles.searchbar}>
          <SearchBar
            rund
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            placeholder="جستجو  ..."
            style={styles.seachbarinside}
            value={search}
            inputStyle={{
              backgroundColor: "#E9E7FD",
              color: "black",
              fontFamily: "EstedadRegular",
              fontSize: 14,
            }}
            inputContainerStyle={{ backgroundColor: "#E9E7FD" }}
            containerStyle={styles.searchcontainer}
            placeholderTextColor={"grey"}
            selectionColor={"grey"}
          />
        </View>
      )
    }
    if (Fname_Lname_enable) {
      if (Ncode_enable)
      {
        set_Ncode_enable(false)
      }
      return (
        <View style={styles.searchbar}>
          <SearchBar
            rund
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            placeholder="جستجوی نام خانوادگی ..."
            style={styles.seachbarinside}
            value={search}
            inputStyle={{
              backgroundColor: "#E9E7FD",
              color: "black",
              fontFamily: "EstedadRegular",
              fontSize: 14,
            }}
            inputContainerStyle={{ backgroundColor: "#E9E7FD" }}
            containerStyle={styles.searchcontainer}
            placeholderTextColor={"grey"}
            selectionColor={"grey"}
          />
        </View>
      )
    }


  }
  const N_Code_func = () => {
    set_Ncode_enable(!Ncode_enable)
  
  }
  const Fname_Lname_Func = () => {
    set_Fname_Lname_enable(!Fname_Lname_enable)
    console.log(Fname_Lname_enable)

  }

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.name}
      </Text>
    );
  };

  return (
    <ActionSheetProvider>
      <View style={styles.student_main_container}>
        <TouchableOpacity style={{ top: "90%", zIndex: 1, height: 60, alignItems: "flex-start", left: 20 }} onPress={press} ><Ionicons name="add-circle" size={60} color="#E55400" /></TouchableOpacity>
        <View style={styles.studentview_total}>
          {/* <Filter_Teacher SEARCH_FILTER_FUNCTION_Fname_Lname={searchFilterFunction_Fname_Lname} SEARCH_FILTER_FUNCTION_Ncode={searchFilterFunction_Ncode} SEARCH_Ncode={search_Ncode} SEARCH_fNAME_lNAME={search_Fname_Lname}/> */}
       
          <FlatList
            data={filteredDataSource}
            renderItem={({ item }) => {
              return (
                <View style={styles.students_infocard_container}>
                  <View style={styles.students_infocard}>
                    <View style={styles.pic_more_button_container}>
                      <View style={styles.pic_part_info}>
                        <View style={styles.profile_img_text}>
                          <Image
                            source={item.image}
                            style={styles.profileimage}
                          />
                          <Text
                            style={{
                              marginLeft: 10,
                              fontFamily: "EstedadRegular",
                              fontSize: 14,
                            }}
                          >
                            {item.name}
                          </Text>
                          <Text
                            style={{
                              marginLeft: 5,
                              fontFamily: "EstedadRegular",
                              fontSize: 14,
                            }}
                          >
                            {item.fmilyname}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.threedot_container}>
                        {/* <View style={styles.threedot} onPress={console.log("salam")}></View> */}
                        <TeacherActionButton ID={item.name}  />
                      </View>
                    </View>
                    <View style={styles.infocontainer}>
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 25,
                          }}
                        >
                          پایه :
                        </Text>
                        <Text
                          style={{
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                          }}
                        >
                          {item.paye}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 25,
                          }}
                        >
                          کلاس :
                        </Text>
                        <Text
                          style={{
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                          }}
                        >
                          {item.class}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 25,
                          }}
                        >
                         کد ملی:
                        </Text>
                        <Text
                          style={{
                            fontFamily: "EstedadRegular",
                            fontSize: 15,
                            paddingRight: 10,
                          }}
                        >
                          {item.Ncode}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </View>
      
    </ActionSheetProvider>
  );
};

const styles = StyleSheet.create({
  student_main_container: {
    flex: 1,
  },
  studentview_total: {
    backgroundColor: "#E9E7FD",
    bottom:60
    
  },
  searchbar: {
    backgroundColor: "#E9E7FD",
  },
  seachbarinside: {},
  searchcontainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 350,
    backgroundColor: "#E9E7FD",
    borderWidth: 1, //no effect
    shadowColor: "#E9E7FD", //no effect
    borderBottomColor: "grey",
    borderTopColor: "grey",
    left: 30,
    borderRadius: 10,
    selectionColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  chipcontainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  chipfilter: {
    backgroundColor: "#EFECF3",
    height: 40,
    width: 90,
    marginTop: 10,
    left: 30,
    fontFamily: "EstedadSemiBold",
    marginLeft: 5,
    borderRadius: 30,
  },
  student_info_flatlist: {
    top: 20,
  },
  students_infocard_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  students_infocard: {
    height: 180,
    width: 350,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },
  pic_more_button_container: {
    height: 70,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
  },
  pic_part_info: {
    height: 70,
    width: 175,
  },
  profileimage: {
    height: 50,
    width: 50,
    borderRadius: 40,
    marginLeft: 16,
    marginTop: 10,
  },
  profile_img_text: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionsheet_container: {
    height: 80,
  },
  threedot_container: {
    alignItems: "flex-end",
    width: 175,
  },
  threedot: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  infocontainer: {
    flexDirection: "column",
    height: 110,
    width: 350,
  },
});

export default Teacher_abcence;
