import { createContext, useState, useEffect } from "react";
export const Authenticated_contex = createContext({
  userData: [],
  isauthenticate: false,
  refreshstate: (state) => {},
});
function Authenticated_contextprovider({ children }) {
  const [refresh, setrefresh] = useState(true);
  const [is_authenticate, set_is_authenticate] = useState(false);
  const [user_Data, set_user_Data] = useState([]);

  function refreshstate(state) {
    setrefresh(!refresh);
  }

  const value = {
    userData: user_Data,
    isauthenticate: is_authenticate,
    refreshstate: refreshstate,
  };
  return (
    <Authenticated_contex.Provider value={value}>
      {children}
    </Authenticated_contex.Provider>
  );
}
export default Authenticated_contextprovider;
