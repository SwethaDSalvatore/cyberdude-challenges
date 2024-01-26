
import TheNavbar from "./components/TheNavbar";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"

function App() {

  return (
    <div className="bg-gray-300 min-h-screen">
      <TheNavbar />
      <div className="bg-white max-w-xl mx-auto border rounded p-10 m-10">
        <HomePage />
        <AboutPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App
