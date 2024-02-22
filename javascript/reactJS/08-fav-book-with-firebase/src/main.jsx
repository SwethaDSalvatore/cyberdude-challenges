import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home.jsx";
import BookBank from "./pages/BookBank.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./firebase/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book-bank",
    element: <BookBank />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
