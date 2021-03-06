import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { DataContextProvider } from "./Context/DataContext";

function App() {
  return (
    <React.Fragment>
      <Header />
        <DataContextProvider>
          <Routes>
            <Route path="/user/:userId" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </DataContextProvider>
    </React.Fragment>
  );
}

export default App;
