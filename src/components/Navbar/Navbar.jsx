import { useContext } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { authcontext } from "../../Authprovider/Authprovider";
import img from '../../assets/Untitled-1.png'

const Navbar = () => {
    const { user, logout } = useContext(authcontext);

    const handlesignout=()=>{
        logout()
        .then(res=>console.log(res.user))
        .catch(error=>console.log(error))
      }
    const navlink = (
        <>
          <div className="font-medium text-sm space-x-3">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-600 p-1 rounded-lg text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              home
            </NavLink>
    
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-600 p-1 rounded-lg text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/about"}
            >
             about
            </NavLink>
    
    
    
    
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-600 p-1 rounded-lg text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/contacts"}
            >
              contact us
            </NavLink>
    
    
    {
      user && 
      <>
      
      
      <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-600 p-1 rounded-lg text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/addProduct"}
            >
              add product
            </NavLink>
      
      
      
      
      <NavLink
                className={({ isActive, isPending }) => isActive
                  ? "bg-gray-600 p-1 rounded-lg text-white"
                  : isPending
                    ? "pending"
                    : ""}
                to={"/mycart"}
              >
                my cart
              </NavLink>
              
              
              
              <NavLink
                className={({ isActive, isPending }) => isActive
                  ? "bg-gray-600 p-1 rounded-lg text-white"
                  : isPending
                    ? "pending"
                    : ""}
                to={"/account"}
              >
                  account setting
                </NavLink></>
    }
    
    
    
    
          </div>
        </>
      );
    return (
        <div>
             <Headroom>
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navlink}
              </ul>
            </div>
            {/* <a className="btn btn-ghost normal-case text-xl">
              <span className="text-sky-950 font-bold">Event</span> Agency
            </a> */}

            <div>
             <Link to={'/'}> <img className="w-36 " src={img} alt="" /></Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlink}</ul>
          </div>
          <div className="navbar-end">

<div><label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer px-3 text-gray-800">
	<span className="font-semibold">light</span>
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
	</span>
	<span className="font-semibold" >dark</span>
</label></div>

            <div className="dropdown dropdown-end">


             {


user? <>  
<label tabIndex={0} className="">

  <div className="avatar">
    <div className="w-12 rounded-full">
      <img src={user.photoURL} />
    </div>
  </div>
</label>
<ul
  tabIndex={0}
  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
>
  <li>
    <a>{user.displayName}</a>
  </li>
  <li>
    <a>{user.email}</a>
  </li>
<Link onClick={handlesignout}>  <li>
    <a>sign out</a>
  </li></Link>
</ul></> : <Link to={'/login'} ><button className="btn rounded-md ">sign in</button></Link>


             }




            </div>
          </div>
        </div>
      </Headroom>
        </div>
    );
};

export default Navbar;