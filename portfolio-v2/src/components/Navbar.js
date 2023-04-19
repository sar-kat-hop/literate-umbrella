import React from 'react';
import { Link } from 'react-router-dom';

// TODO: use Link to make <li> link to pages

function Navbar() {
    return (
        <div id="navbar" className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* use Link to direct each of these items to respective pages */}
                            <li>
                                <a><Link to='/'> Home </Link></a>
                            </li>
                            <li>
                                <a><Link to='/portfolio'> Portfolio </Link></a>
                            </li>
                            <li>
                                <a><Link to='/about'> About Me </Link></a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"><Link to='/about'>sarah.k.h.</Link></a>
            </div>
        </div>
    )
}

export default Navbar;

// daisyui has cool tab component that highlights active page... kind of interested in implementing this later, however it would require adding some logic to change className modifiers to correctly highlight active page
{/* <div className="tabs">
    <a className="tab tab-lifted">Tab 1</a> 
    <a className="tab tab-lifted tab-active">Tab 2</a> 
    <a className="tab tab-lifted">Tab 3</a>
</div> */}