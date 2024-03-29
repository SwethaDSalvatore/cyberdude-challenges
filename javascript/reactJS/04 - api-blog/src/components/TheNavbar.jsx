import { Link } from "react-router-dom";

const TheNavbar = () => {
    return <div className="bg-[#3E3232] p-2  sm:px-10 sm:py-5 flex items-center justify-between">
        <h4 className="font-semibold sm:text-xl text-sm text-white">API-Blog</h4>
        <ul className="flex space-x-4">
            <li className="text-white sm:text-base text-sm hover:text-slate-400"><Link to={'./'}>Home</Link></li>
            <li className="text-white sm:text-base text-sm hover:text-slate-400" ><a href="https://github.com/SwethaDSalvatore/" target="blank">Contact</a></li>
        </ul>
    </div>
}

export default TheNavbar