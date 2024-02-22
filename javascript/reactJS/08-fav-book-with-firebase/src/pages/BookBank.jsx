import React from "react";
import BookBankHome from "../components/BookBankHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookBank = () => {
  return (
    <div>
      <Navbar />
      <BookBankHome />
      <Footer/>
    </div>
  );
};

export default BookBank;
