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
import React, { useState, useEffect, useRef, useContext } from "react";
import Teacher_Attendance from "../../teacher_attendance";
import Teacher_abcence from "../teacher_absece";
import { Filtercontex } from "../../../../../../../../store/context/filterdatacontex";
import Authenticated_contextprovider from "../../../../../../../../store/context/authenticated_contex";
import { Authenticated_contex } from "../../../../../../../../store/context/authenticated_contex";
import { axiosinterceptor } from "../../../../../../../../interceptors/axiosinteceptor";
import axios from "axios";

function Filter_Teacher() {
  const app_auth_context = useContext(Authenticated_contex);
  const filter_absence_context = useContext(Filtercontex);

  const DummyAbsence = [
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "رادین",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      Ncode: "271534687",
      fname_Lname: "رادین رحمانی",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "حسین",
      fmilyname: "حسابی",
      paye: "چهارم",
      class: "سه",
      username: "javadjj",
      fname_Lname: "حسین حسابی",
      Ncode: "0159874632",
      chips: false,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "مریم",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "مریم حسنی",
      Ncode: "2589641398",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "رهام",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "رهام رحمانی",
      Ncode: "2758964137",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "رهام",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "رهام رحمانی",
      Ncode: "2740896547",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "سام",
      fmilyname: "عبدی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "سام عبدی",
      Ncode: "0157896412",
    },

    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "سام",
      fmilyname: "عبدی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "سام عبدی",
      Ncode: "0157896412",
    },
  ];
  const DummyLate = [
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "اران",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      Ncode: "271534687",
      fname_Lname: "رهام رحمانی",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "حسین",
      fmilyname: "حسابی",
      paye: "چهارم",
      class: "سه",
      username: "javadjj",
      fname_Lname: "حسین حسابی",
      Ncode: "0159874632",
      chips: false,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "مریم",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "مریم حسنی",
      Ncode: "2589641398",
      chips: true,
    },
  ];

  const DummyLeave = [
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "یردیا",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      Ncode: "271534687",
      fname_Lname: "رهام رحمانی",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "حسین",
      fmilyname: "حسابی",
      paye: "چهارم",
      class: "سه",
      username: "javadjj",
      fname_Lname: "حسین حسابی",
      Ncode: "0159874632",
      chips: false,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "مریم",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "مریم حسنی",
      Ncode: "2589641398",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "رهام",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "رهام رحمانی",
      Ncode: "2758964137",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "رهام",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "رهام رحمانی",
      Ncode: "2740896547",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "سام",
      fmilyname: "عبدی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "سام عبدی",
      Ncode: "0157896412",
    },

    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "سام",
      fmilyname: "عبدی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "سام عبدی",
      Ncode: "0157896412",
    },
  ];
  const DummyOvertime = [
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "ریژوان",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      Ncode: "271534687",
      fname_Lname: "رهام رحمانی",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "حسین",
      fmilyname: "حسابی",
      paye: "چهارم",
      class: "سه",
      username: "javadjj",
      fname_Lname: "حسین حسابی",
      Ncode: "0159874632",
      chips: false,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "مریم",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "مریم حسنی",
      Ncode: "2589641398",
      chips: true,
    },
  ];

  const Dummydata = [
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "راین",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      Ncode: "271534687",
      fname_Lname: "رهام رحمانی",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "حسین",
      fmilyname: "حسابی",
      paye: "چهارم",
      class: "سه",
      username: "javadjj",
      fname_Lname: "حسین حسابی",
      Ncode: "0159874632",
      chips: false,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "مریم",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "مریم حسنی",
      Ncode: "2589641398",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "رهام",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "رهام رحمانی",
      Ncode: "2758964137",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "رهام",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "رهام رحمانی",
      Ncode: "2740896547",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "سام",
      fmilyname: "عبدی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "سام عبدی",
      Ncode: "0157896412",
    },

    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "سام",
      fmilyname: "عبدی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "سام عبدی",
      Ncode: "0157896412",
    },
  ];
  const Dummydata1 = [
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "اران",
      fmilyname: "رحمانی",
      paye: "سوم",
      class: "سه",
      Ncode: "271534687",
      fname_Lname: "رهام رحمانی",
      chips: true,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "حسین",
      fmilyname: "حسابی",
      paye: "چهارم",
      class: "سه",
      username: "javadjj",
      fname_Lname: "حسین حسابی",
      Ncode: "0159874632",
      chips: false,
    },
    {
      image: require("../../../../../../../../assets/images/Katina.jpg"),
      name: "مریم",
      fmilyname: "حسنی",
      paye: "سوم",
      class: "سه",
      username: "alihgh",
      fname_Lname: "مریم حسنی",
      Ncode: "2589641398",
      chips: true,
    },
  ];

  const [filtered_Absence_DataSource, setfiltered_Absence_DataSource] =
    useState(DummyAbsence);
  const [filtered_Late_DataSource, setfiltered_Late_DataSource] =
    useState(DummyLate);
  const [filtered_Leave_DataSource, setfiltered_Leave_DataSource] =
    useState(DummyLeave);
  const [filtered_Overtime_DataSource, setfiltered_Overtime_DataSource] =
    useState(DummyOvertime);
  const [Master_Absence_DataSource, setMaster_Absence_DataSource] =
    useState(DummyAbsence);
  const [Master_Late_DataSource, setMaster_Lesve_DataSource] =
    useState(DummyLate);
  const [Master_Leave_DataSource, setMaster_Leave_DataSource] =
    useState(DummyLeave);
  const [Master_Overtime_DataSource, setMaster_Overtime_DataSource] =
    useState(DummyOvertime);
  const [search_Fname_Lname, setsearch_Fname_Lname] = useState("");
  const [search_Ncode, setsearch_Ncode] = useState("");
  const [refresh, setrefresh] = useState(false);
  const [Ncode_enable, set_Ncode_enable] = useState(false);
  const [Fname_Lname_enable, set_Fname_Lname_enable] = useState(false);
  const [base_today, set_base_today] = useState(false);
  const [base_week, set_base_week] = useState(false);
  const [base_month, set_base_month] = useState(false);
  const [base_year, set_base_year] = useState(false);

  filter_absence_context.filter_abcent = filtered_Absence_DataSource;
  filter_absence_context.filter_late = filtered_Late_DataSource;
  filter_absence_context.filter_leave = filtered_Leave_DataSource;
  filter_absence_context.filter_overtime = filtered_Overtime_DataSource;
  var dummaparse = filtered_Absence_DataSource.length;

  useEffect(() => {
    const token = app_auth_context.userData.access_token;
    console.log(token);
    const fetchdata = async () => {
      try {
        const response = await axiosinterceptor({
          url: "user/",
          method: "get",
          headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
          console.log(res.data, "res data filter");
        });
      } catch (err) {
        console.log(err, "err filter");
      }
    };
    fetchdata();
    filter_absence_context.refreshstate();
  }, [
    filtered_Absence_DataSource,
    filtered_Late_DataSource,
    filtered_Leave_DataSource,
    filtered_Overtime_DataSource,
  ]);
  const Refresh_func = () => {
    setrefresh(!refresh);
  };

  const searchFilterFunction_Fname_Lname = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      let a = 2;
      const AbsenceData = Master_Absence_DataSource.filter(function (item) {
        a = a + 1;
        const itemData = item.fname_Lname
          ? item.fname_Lname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        console.log(itemData, a, itemData.indexOf(textData), textData);
        return itemData.indexOf(textData) > -1;
      });
      const LateData = Master_Late_DataSource.filter(function (item) {
        const itemData = item.fname_Lname
          ? item.fname_Lname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      const LeaveData = Master_Leave_DataSource.filter(function (item) {
        const itemData = item.fname_Lname
          ? item.fname_Lname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      const Overtime = Master_Leave_DataSource.filter(function (item) {
        const itemData = item.fname_Lname
          ? item.fname_Lname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfiltered_Absence_DataSource(AbsenceData);
      setfiltered_Late_DataSource(LateData);
      setfiltered_Leave_DataSource(LeaveData);
      setfiltered_Overtime_DataSource(Overtime);
      setsearch_Fname_Lname(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setfiltered_Absence_DataSource(Master_Absence_DataSource);
      setfiltered_Late_DataSource(Master_Late_DataSource);
      setfiltered_Leave_DataSource(Master_Leave_DataSource);
      setfiltered_Overtime_DataSource(Master_Leave_DataSource);
      setsearch_Fname_Lname(text);
    }
  };
  const searchFilterFunction_Ncode = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource

      const AbsenceData = Master_Absence_DataSource.filter(function (item) {
        const itemData = item.Ncode
          ? item.Ncode.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      const LateData = Master_Late_DataSource.filter(function (item) {
        const itemData = item.Ncode
          ? item.Ncode.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      const LeaveData = Master_Leave_DataSource.filter(function (item) {
        const itemData = item.Ncode
          ? item.Ncode.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      const Overtime = Master_Leave_DataSource.filter(function (item) {
        const itemData = item.Ncode
          ? item.Ncode.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfiltered_Absence_DataSource(AbsenceData);
      setfiltered_Late_DataSource(LateData);
      setfiltered_Leave_DataSource(LeaveData);
      setfiltered_Overtime_DataSource(Overtime);
      setsearch_Ncode(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setfiltered_Absence_DataSource(Master_Absence_DataSource);
      setfiltered_Late_DataSource(Master_Late_DataSource);
      setfiltered_Leave_DataSource(Master_Leave_DataSource);
      setfiltered_Overtime_DataSource(Master_Leave_DataSource);
      setsearch_Ncode(text);
    }
  };

  const conditional_searchbar = () => {
    if (Ncode_enable && !Fname_Lname_enable) {
      if (Fname_Lname_enable) {
        set_Fname_Lname_enable(!Fname_Lname_enable);
      }
      return (
        <View style={styles.searchbar}>
          <SearchBar
            rund
            searchIcon={{ size: 24 }}
            onChangeText={(text) => {
              searchFilterFunction_Ncode(text);
            }}
            onClear={(text) => {
              searchFilterFunction_Ncode("");
            }}
            placeholder="جستجو(کد ملی) ..."
            style={styles.seachbarinside}
            value={search_Ncode}
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
          />{" "}
        </View>
      );
    }

    if (Fname_Lname_enable && !Ncode_enable) {
      return (
        <View style={styles.searchbar}>
          <SearchBar
            rund
            searchIcon={{ size: 24 }}
            onChangeText={(text) => {
              searchFilterFunction_Fname_Lname(text);
            }}
            onClear={(text) => {
              searchFilterFunction_Fname_Lname("");
            }}
            placeholder="جستجو (نام خانوادگی) ..."
            style={styles.seachbarinside}
            value={search_Fname_Lname}
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
          />{" "}
        </View>
      );
    }
  };
  const Disable_state_func = (state) => {
    if (state == N_Code_func) {
      set_Fname_Lname_enable(false);
    }
    if (state == Fname_Lname_Func) {
      set_Ncode_enable(false);
    }
    Refresh_func();
  };
  const N_Code_func = () => {
    Disable_state_func(N_Code_func);
    set_Ncode_enable(!Ncode_enable);
  };
  const Fname_Lname_Func = () => {
    set_Fname_Lname_enable(!Fname_Lname_enable);
    Disable_state_func(Fname_Lname_Func);
  };
  const disable_timeline_func = () => {
    set_base_today(false);
    set_base_week(false);
    set_base_month(false);
    set_base_year(false);
  };
  const filter_baseon_day = () => {
    disable_timeline_func(), set_base_today(!base_today);
  };
  const filter_baseon_week = () => {
    disable_timeline_func(),
      set_base_week(!base_week),
      setFilteredDataSource(Dummydata1);
    setMasterDataSource(Dummydata1);
  };
  const filter_baseon_month = () => {
    disable_timeline_func(), set_base_month(!base_month);
  };
  const filter_baseon_year = () => {
    disable_timeline_func(), set_base_year(!base_year);
  };

  return (
    <View style={styles.studentview_total}>
      {" "}
      {conditional_searchbar()}{" "}
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
          کد ملی{" "}
        </Chip>{" "}
        <Chip
          style={styles.chipfilter}
          icon="filter-outline"
          onPress={Fname_Lname_Func}
        >
          فامیل{" "}
        </Chip>{" "}
        <Chip
          style={base_today ? styles.chipfilter_enable : styles.chipfilter}
          icon="filter-outline"
          onPress={filter_baseon_day}
        >
          امروز{" "}
        </Chip>{" "}
        <Chip
          style={base_week ? styles.chipfilter_enable : styles.chipfilter}
          icon="filter-outline"
          onPress={filter_baseon_week}
        >
          هفته{" "}
        </Chip>{" "}
        <Chip
          style={base_month ? styles.chipfilter_enable : styles.chipfilter}
          icon="filter-outline"
          onPress={filter_baseon_month}
        >
          ماه{" "}
        </Chip>{" "}
        <Chip
          style={base_year ? styles.chipfilter_enable : styles.chipfilter}
          icon="filter-outline"
          onPress={filter_baseon_year}
        >
          سال{" "}
        </Chip>{" "}
      </ScrollView>{" "}
    </View>
  );
}

export default Filter_Teacher;

const styles = StyleSheet.create({
  student_main_container: {
    flex: 1,
  },
  studentview_total: {
    backgroundColor: "#E9E7FD",
    margin: 0,
    padding: 0,
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
    fontFamily: "EstedadSemiBold",
    marginLeft: 15,
    borderRadius: 30,
  },
  chipfilter_enable: {
    backgroundColor: "#decef5",
    height: 40,
    width: 90,
    marginTop: 10,
    fontFamily: "EstedadSemiBold",
    marginLeft: 15,
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
