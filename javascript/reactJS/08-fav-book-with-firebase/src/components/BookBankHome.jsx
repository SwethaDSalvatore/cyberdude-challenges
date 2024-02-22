import React, { useEffect } from "react";
import InputField from "./InputField";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const BookBankHome = () => {
  const [formValue, setFormValue] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const docRef = await addDoc(collection(db, "donationData"), formObject);
      console.log("Document written with ID: ", docRef.id);
      alert("Thanks for you contribution😊");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    event.target.reset();
    console.log(formObject);
  };

  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, "donationData"));
      setFormValue(querySnapshot.docs.map((doc) => doc.data()));
      if (querySnapshot.docs.length === 0) {
        console.log("No record exist");
      }
    }
    getDataFromFirebase();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="sm:flex justify-between items-center p-4">
        <img
          src="https://i.pinimg.com/564x/56/ea/63/56ea63c69bda998e951be5848dcbba78.jpg"
          alt=""
        />
        <div className="space-y-4 ">
          <h1 className="sm:text-2xl font-semibold text-center">
            Welcome To <span className="text-red-500">Bookiee </span>Bank
          </h1>
          <p className="sm:text-2xl text-center">
            A Bank Where You Can Donate Books, We Value Your Books.
          </p>
          <div className="">
            <form
              className="max-w-xl mx-auto p-4 bg-red-400 rounded-lg"
              onSubmit={handleSubmit}
            >
              {/* Input fields using InputField component */}
              <InputField
                label="Book Name"
                name="book_name"
                type="text"
                placeholder="Harry Potter"
                required
              />
              <InputField
                label="Author Name"
                name="author_name"
                type="text"
                placeholder="J. K. Rowling"
                required
              />
              <InputField
                label="Donor Full Name"
                name="donor_name"
                type="text"
                placeholder="Swetha Ramesh"
                required
              />
              <InputField
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="+91-8012345678"
                pattern="^\+[0-9]{2}\s[0-9]{10}$"
                required
              />
              <InputField
                label="Email address"
                name="email"
                type="email"
                placeholder="swetha.ramesh@company.com"
                required
              />

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="terms"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ms-2 text-sm font-medium text-white"
                >
                  I agree with the{" "}
                  <a href="#" className="hover:underline text-black">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="sm:text-2xl text-center sm:font-semibold pt-4 pb-4">
          Every Book Finds a Loving Home, Let's Donate
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left rtl:text-right  text-black">
            <thead className="text-xs uppercase bg-red-500 text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.NO
                </th>
                <th scope="col" className="px-6 py-3">
                  Book Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Author Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Doner Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Doner Phone number
                </th>
                <th scope="col" className="px-6 py-3">
                  Doner Email ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {formValue.map((formData, index) => (
                <tr
                  className="odd:bg-white  bg-red-200 border-b border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4">{index+1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap "
                  >
                    {formData.book_name}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap "
                  >
                    {formData.author_name}
                  </th>
                  <td className="px-6 py-4">{formData.donor_name}</td>
                  <td className="px-6 py-4">{formData.phone}</td>
                  <td className="px-6 py-4">{formData.email}</td>                 
                  <td className="px-6 py-4 font-medium text-green-700 hover:underline cursor-pointer" onClick={() => alert("Thanks for you request, will let you know the status soon..!")}>
                    Check Status
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookBankHome;
