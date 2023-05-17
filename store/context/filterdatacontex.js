import { createContext, useState, useEffect } from "react";
export const Filtercontex = createContext({
  filter_abcent: [],
  filter_present: [],
  filter_late: [],
  filter_leave: [],
  filter_overtime: [],
  refreshstate: (state) => {},
});
function Filter_contextprovider({ children }) {
  const [refresh, setrefresh] = useState(true);
  const [filterabsence, setfilterabsence] = useState([]);
  const [filterpresent, setfilter_present] = useState([]);
  const [filterlate, setfilterlate] = useState([]);
  const [filterleave, setfilter_leave] = useState([]);
  const [filterOvertime, setfilterOvertime] = useState([]);
  function refreshstate(state) {
    setrefresh(!refresh);
  }

  const value = {
    filter_abcent: filterabsence,
    filter_present: filterpresent,
    filter_late: filterlate,
    filter_leave: filterleave,
    filter_overtime: filterOvertime,
    refreshstate: refreshstate,
  };
  return (
    <Filtercontex.Provider value={value}>{children}</Filtercontex.Provider>
  );
}
export default Filter_contextprovider;
