import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
