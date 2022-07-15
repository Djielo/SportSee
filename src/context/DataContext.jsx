import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const DataContext = createContext(undefined);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const currentUrl = useLocation();
  const userId = currentUrl.pathname.split("/user/")[1];
  console.log(userId);

  let endpoints = [
    `https://calm-gorge-80201.herokuapp.com/user/${userId}/`,
    `https://calm-gorge-80201.herokuapp.com/user/${userId}/activity`,
    `https://calm-gorge-80201.herokuapp.com/user/${userId}/performance`,
    `https://calm-gorge-80201.herokuapp.com/user/${userId}/average-sessions`,
  ];
  useEffect(() => {
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(({ data: user }, { data: activity }, { data: performance }, { data: average }) => {
        setData({ user, activity, performance, average });
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContextProvider, DataContext };
