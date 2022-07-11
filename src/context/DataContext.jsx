import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

// export default React.createContext({
// data: [],
// setData: () => {}
// })

const DataContext = createContext(undefined);

const DataContextProvider = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://calm-gorge-80201.herokuapp.com/user/12").then((res) => setData(res.data.data))
  }, [])

  return <DataContext.Provider value={ [data, setData] }>{children}</DataContext.Provider>;
};

export {DataContextProvider, DataContext};
