import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-red-400 p-4 flex justify-between items-center">
        <h1 className="text-xl text-white font-custom"><Link to={'/'}>Bookiee</Link></h1>
        <div className="flex space-x-4">
          <h1 className="font-semibold text-white">
            <Link to={"./book-bank"}>Book Bank</Link>
          </h1>
          <h1 className="font-semibold text-white">
            <a href="https://github.com/SwethaDSalvatore/cyberdude-challenges/tree/main/javascript/reactJS">
              Contact
            </a>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
