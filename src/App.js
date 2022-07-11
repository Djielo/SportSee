import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { DataContextProvider } from "./Context/DataContext";
import Profile from "./pages/Error/Profile/Profile";

function App() {
  return (
    <React.Fragment>
      <Header />
      <DataContextProvider>
        <Routes>
          <Route path="/user/12" element={<Home />} />
          <Route path="/user/18" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </DataContextProvider>
    </React.Fragment>
  );
}

export default App;
