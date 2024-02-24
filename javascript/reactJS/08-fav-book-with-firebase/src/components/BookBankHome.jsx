import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import {
  collection,
  getDocs,
  addDoc,
  doc as firestoreDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { deleteDoc } from "firebase/firestore";

const BookBankHome = () => {
  const [formValue, setFormValue] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, "donationData"));
      setFormValue(
        querySnapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }))
      );
      if (querySnapshot.docs.length === 0) {
        console.log("No record exists");
      }
    }
    getDataFromFirebase();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      if (editIndex !== null) {
        // If editIndex is not null, it means we're editing an existing entry
        const docIdToUpdate = formValue[editIndex].docId;
        await updateDoc(
          firestoreDoc(db, "donationData", docIdToUpdate),
          formObject
        );
        console.log("Document updated successfully");
        setEditIndex(null); // Reset editIndex after editing
      } else {
        // If editIndex is null, it means we're adding a new entry
        const docRef = await addDoc(collection(db, "donationData"), formObject);
        console.log("Document written with ID: ", docRef.id);
        alert("Thanks for your contribution😊");
      }

      // Update formValue state with the new document or updated document
      setFormValue((prevFormValue) => {
        const updatedFormValue = [...prevFormValue];
        if (editIndex !== null) {
          updatedFormValue[editIndex] = formObject; // Update existing entry
        } else {
          updatedFormValue.push(formObject); // Add new entry
        }
        return updatedFormValue;
      });
    } catch (e) {
      console.error("Error adding/updating document: ", e);
    }
    event.target.reset();
  };

  const handleDelete = async (index) => {
    try {
      const docIdToDelete = formValue[index]?.docId;
      if (docIdToDelete) {
        await deleteDoc(firestoreDoc(db, "donationData", docIdToDelete));
        alert("Document deleted successfully");
        setFormValue((prevFormValue) =>
          prevFormValue.filter((_, i) => i !== index)
        );
      } else {
        console.error("Document ID is undefined or null");
      }
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleEdit = (index) => {
    alert("Check the form and do you edit");
    setEditIndex(index);
    // Populate the form fields with the data of the item being edited
    const formData = formValue[index];
    document.getElementById("book_name").value = formData.book_name;
    document.getElementById("author_name").value = formData.author_name;
    document.getElementById("donor_name").value = formData.donor_name;
    document.getElementById("phone").value = formData.phone;
    document.getElementById("email").value = formData.email;
  };

  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, "donationData"));
      setFormValue(
        querySnapshot.docs.map((doc) => ({
          docId: doc.id, // Set the document ID
          ...doc.data(),
        }))
      );
      if (querySnapshot.docs.length === 0) {
        console.log("No record exists");
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
                <th scope="col" className="px-6 py-3 text-center">
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
                  <td className="px-6 py-4">{index + 1}</td>
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
                  <td className="px-6 py-4 font-medium cursor-pointer flex items-center justify-center space-x-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-7 text-yellow-500 hover:text-yellow-600 fill-current"
                      onClick={() => handleEdit(index)}
                    >
                      <path
                        fill="currentColor"
                        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-7 text-red-500 hover:text-red-600 fill-current"
                      onClick={() => handleDelete(index)}
                    >
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                      ></path>
                    </svg>
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
