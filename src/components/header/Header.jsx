import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // Sign Out
    const handleLogout = () => {
        logOutUser()
            .then(() => Swal.fire('Oops!', 'LogOut Successful!', 'success'))
            .catch((err) => Swal.fire('Oops!', err.message, 'error'))
    }

    const navLink = <>
        <ul className="menu menu-horizontal px-1 lg:flex gap-1 hidden">
            <NavLink to={'/'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}>
                Home
            </NavLink>

            <NavLink to={'/addProduct'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}                        >
                Add Product
            </NavLink>

            <NavLink to={'/myCart'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}                        >
                My Cart
            </NavLink>

            <NavLink to={'/register'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}                        >
                Register
            </NavLink>
        </ul>
    </>

    const navLinkMd = <>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] flex gap-3 shadow rounded-box w-52 bg-slate-400 p-5 text-white">
            <NavLink to={'/'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}>
                Home
            </NavLink>

            <NavLink to={'/addProduct'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}                        >
                Add Product
            </NavLink>

            <NavLink to={'/myCart'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}                        >
                My Cart
            </NavLink>

            <NavLink to={'/register'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}                        >
                Register
            </NavLink>
        </ul>
    </>

    // Dark Mode
    // useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme");
    //     if (savedTheme) {
    //         setIsDarkMode(savedTheme === "dark");
    //     } else {
    //         setIsDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
    //     }
    // }, []);

    // const toggleDarkMode = () => {
    //     const newTheme = isDarkMode ? "light" : "dark";
    //     setIsDarkMode(!isDarkMode);
    //     document.documentElement.setAttribute("data-theme", newTheme);
    //     localStorage.setItem("theme", newTheme);
    // };

    // const handleToggle = () => {
    //     toggleDarkMode();
    // };

    return (
        <div className="max-w-7xl mx-auto sticky top-0 z-50 bg-[#8e8e945a]">
            <div className="navbar p-0 px-4 flex justify-between">
                <div className="lg:navbar-start lg:w-auto w-3/2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {navLinkMd}
                    </div>
                    <Link to='/'><button className="normal-case text-[24px] md:text-3xl font-bold text-[#6531ae] dark:text-indigo-500">Automotive</button></Link>
                </div>
                <div className="navbar-center lg:mx-auto lg:w-auto rounded-lg lg:flex">
                    {navLink}
                </div>
                <div className="lg:navbar-end lg:w-auto w-3/1">
                    {/* Dark Mode button */}
                    {/* <input
                        type="checkbox"
                        className="toggle mx-2"
                        checked={isDarkMode}
                        onChange={handleToggle}
                    /> */}

                    <div onClick={() => setIsOpen(!isOpen)}>
                        {
                            user ? <>
                                <label tabIndex={0} className="btn btn-secondary btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <label>
                                            <div>
                                                <img className="w-10 rounded-full cursor-pointer" src={user?.photoURL} />
                                            </div>
                                        </label>
                                    </div>
                                </label>

                            </>
                                : <NavLink to={'/login'}
                                    className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold" : "btn bg-[#616d7b81] text-white text-[14px] font-semibold"}                      >
                                    Sign In
                                </NavLink>
                        }
                    </div>
                    {user && isOpen && (
                        <div className='absolute rounded-xl shadow-md w-[40vw] p-2 md:p-2 lg:w-[10vw] mr-2 md:w-[20vw] bg-[#756d7555] right-0 top-20'>
                            <div className='flex flex-col py-2 justify-center items-center'>
                                <h3 className="font-bold text-center text-slate-700 disabled">{user?.displayName}</h3>
                                <button onClick={handleLogout} className="lg:px-5 px-3 mt-2 hover:bg-gray-500 text-white lg:mt-3 rounded-lg text-[14px] font-bold py-3  bg-violet-400">Login Out</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Header;