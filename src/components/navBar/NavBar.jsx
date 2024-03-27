import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar bg-base-100 fixed top-0 w-full z-10 work-sans shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Home</NavLink>
                        <NavLink to="/all-books" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>All Books</NavLink>
                        <NavLink to="/listed-books" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Listed Books</NavLink>
                        <NavLink to="/pages-to-read" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Pages to Read</NavLink>
                        <NavLink to="/buy" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Buy</NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">The Reading Room</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 *:font-medium *:text-lg">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Home</NavLink>
                    <NavLink to="/all-books" className={({ isActive }) => isActive ? "text-teal-700 font-black " : ""}>All Books</NavLink>
                    <NavLink to="/listed-books" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Listed Books</NavLink>
                    <NavLink to="/pages-to-read" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Pages to Read</NavLink>
                    <NavLink to="/buy" className={({ isActive }) => isActive ? "text-teal-700 font-black" : ""}>Buy</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <a className="btn btn-outline hidden lg:flex">Sign Up</a>
                <a className="btn btn-primary">Sign In</a>
            </div>
        </div>
    )
}

