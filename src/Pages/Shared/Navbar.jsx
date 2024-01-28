import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { AuthContext } from '../../Provider/AuthProviders';
import { UserIcon } from '@heroicons/react/24/solid'




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.email);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{ })
        .catch(error=>console.log(error))
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>All Toy</Link></li>
        <li><Link to='/'>Contacts</Link></li>

{
        user && <li><Link to='order'>MyOrder</Link></li>
        
}        <li>{
            user ?
            <Link onClick={handleLogOut} to='login'>Log Out</Link>
                :
                <Link to='login'>Login</Link>
            }
        </li>
        
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2 ">
                    <li><a>Submenubanglade1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
            <li><Link to='/'>{user && user.email}</Link></li>
    </>
    return (
        <div className="navbar bg-base-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>


                <div className="grid lg:grid-cols-2  items-center ms-10">
                    <Link to="/" className="mt-3 w-16  m-auto">
                        <img src={logo} alt="" />
                    </Link>
                    <h1 className=" font-bold text-xl cursor-pointer mx-auto">
                        <spen className='text-2xl text-orange-500 font-serif'>T</spen>oy <spen className='text-zinc-600'>S</spen>hop</h1>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                
                <div className='mx-auto'>
                {
                    user ?
                        <div className="tooltip" data-tip={user.displayName}>
                            {/* <button className="btn btn-circle btn-outline"> */}
                            <img className=' w-10 rounded-full' src={user.photoURL} alt="" />
                            {/* </button> */}

                        </div>
                        : <div className="tooltip" data-tip='Your Name'>
                            <button className='btn  btn-circle' >
                                <UserIcon className="h-8 w-8 text-white" />
                            </button>
                        </div>
                }
                </div>
           
            </div>
        </div>
    );
};

export default Navbar;