import React from "react";
import Header from "../components/Header";
import TopBooks from "../components/TopBooks";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />  
      <TopBooks />
      <Category /> 
      <Footer/>    
    </div>
  );
};

export default App;
