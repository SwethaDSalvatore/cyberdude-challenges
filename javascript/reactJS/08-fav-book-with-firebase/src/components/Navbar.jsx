import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="">
      <nav className="p-4 bg-red-400 flex justify-between items-center">
        <h1 className="Sm:text-xl text-white font-custom"><Link to={'/'}>Bookiee</Link></h1>
        <div className="flex space-x-4">
          <h1 className="sm:font-semibold text-white">
            <Link to={"/book-bank"}>Book Bank</Link>
          </h1>
          <h1 className="sm:font-semibold text-white">
            <a href="https://github.com/SwethaDSalvatore/cyberdude-challenges/tree/main/javascript/reactJS">
              Contact
            </a>
          </h1>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
