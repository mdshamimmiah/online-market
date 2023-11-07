import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import logo from '../assets/logo1.jpg'

const Navber = () => {


    // auth

    const { user, logOut } = useContext(AuthContext)
    const hendleSignOut = () => {
        logOut()
            .then(() =>
                console.log("logout done"))
            .catch(error => console.log(error.massage))
    }
    // end
    const navlinks = <>
        <div className='flex gap-2'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/addJob'>Add Job</NavLink></li>
            <li><NavLink to='/myPostedJob'>My Posted Job</NavLink></li>
            <li><NavLink to='/myBits'>My Bits</NavLink></li>
            <li><NavLink to='/bitRequest'>Bit Requests</NavLink></li>



            {/* auth */}
            {
                user ? (
                    <>
                        <li onClick={hendleSignOut} className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000] underline" : ""
                                }
                            >
                                Sign Out
                            </NavLink>
                        </li>

                    </>
                ) : (<>
                    <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#000000] underline" : ""
                            }
                        >
                            Sign In
                        </NavLink>
                    </li>

                </>)
            }


        </div>
        {/* end */}

    </>


    return (
        <div>
            <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <img className='w-[50px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {
                            user && (<>
                                <div className="">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />

                                        </div>
                                    </label>

                                </div>
                            </>)
                        }
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navber;