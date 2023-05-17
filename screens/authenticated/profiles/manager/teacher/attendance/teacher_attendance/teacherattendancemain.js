
import Teacher_abcence from './teacher_absece';
import Teacher_late from './teacher_late';
// import React in our code
import React, { useState, useEffect, useRef, useContext } from "react";
import Top_navigation from './top_tabnavigation';
import Filter_Teacher from './filter_teacher_maincomponent/filter_teacher_main_component';
const Teacherattendance=()=> {

  const [search_Fname_Lname, setsearch_Fname_Lname] = useState("");
  const [search_Ncode, setsearch_Ncode] = useState("");
  const searchFilterFunction_Fname_Lname = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.fname_Lname
          ? item.fname_Lname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        console.log(itemData.indexOf(textData));
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
          : "".toUpperCase();
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
  return (
        


<>
<Filter_Teacher/>
<Top_navigation/>
</>
  );
}
export default Teacherattendance