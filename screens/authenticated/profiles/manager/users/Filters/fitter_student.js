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
import React, { useState, useEffect, useRef } from "react";

function Filter_Student(props) {
  const [refresh, setrefresh] = useState(false);
  const [Ncode_enable, set_Ncode_enable] = useState(false);
  const [Fname_Lname_enable, set_Fname_Lname_enable] = useState(false);
  const Refresh_func = () => {
   
    setrefresh(!refresh);
  };

//   useEffect(() => {
  
//   }, [refresh]);

  const conditional_searchbar = () => {
    if (Ncode_enable && !Fname_Lname_enable ) {
      if (Fname_Lname_enable) {
        set_Fname_Lname_enable(!Fname_Lname_enable);
        
      }
      return (
        <View style={styles.searchbar}>
          <SearchBar
            rund
            searchIcon={{ size: 24 }}
            onChangeText={(text) => {
                props.SEARCH_FILTER_FUNCTION_Ncode(text);
            }}
            onClear={(text) => {
                props.SEARCH_FILTER_FUNCTION_Ncode("");
            }}
            placeholder="جستجو(کد ملی) ..."
            style={styles.seachbarinside}
            value={ props.SEARCH_Ncode }
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
      );
    }

    if (Fname_Lname_enable && !Ncode_enable ) {
      return (
        <View style={styles.searchbar}>
          <SearchBar
            rund
            searchIcon={{ size: 24 }}
            onChangeText={(text) => {
                props.SEARCH_FILTER_FUNCTION_Fname_Lname(text);
            }}
            onClear={(text) => {
                props.SEARCH_FILTER_FUNCTION_Fname_Lname("");
            }}
            placeholder="جستجو (نام خانوادگی) ..."
            style={styles.seachbarinside}
            value={ props.SEARCH_fNAME_lNAME }
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
      );
    }
  };
  const Disable_state_func=(state)=>
  {
 
    if(state==N_Code_func)
    {
        set_Fname_Lname_enable(false)
    }
    if(state==Fname_Lname_Func)
    {
        set_Ncode_enable(false)
    }
    Refresh_func();
  }
  const N_Code_func = () => {
   
    
    Disable_state_func(N_Code_func)
    set_Ncode_enable(!Ncode_enable)
  };
  const Fname_Lname_Func = () => {
    set_Fname_Lname_enable(!Fname_Lname_enable);
    Disable_state_func(Fname_Lname_Func)
   
  };

  return (
    <View style={styles.studentview_total}>
      {conditional_searchbar()}
      <ScrollView
        style={styles.chipcontainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          onPress={N_Code_func}
        >
          کد ملی
        </Chip>
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          onPress={Fname_Lname_Func}
        >
          فامیل
        </Chip>
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          
        >
          فیلتر ها
        </Chip>
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          
        >
          فیلتر ها
        </Chip>
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          
        >
          فیلتر ها
        </Chip>
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          
        >
          فیلتر ها
        </Chip>
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          
        >
          فیلتر ها
        </Chip>
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          
        >
          فیلتر ها
        </Chip>
      </ScrollView>
    </View>
  );
}
export default Filter_Student;

const styles = StyleSheet.create({
  student_main_container: {
    flex: 1,
  },
  studentview_total: {
    backgroundColor: "#E9E7FD",
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
