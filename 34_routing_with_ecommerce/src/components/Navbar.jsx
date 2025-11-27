import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center gap-16 bg-gray-700 py-3 px-8">
      <img
        src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
        alt="store image"
        className="w-16"
      />
      <nav className="text-2xl flex gap-7 justify-center">
        <Menu to={'/'} title={'Home'}/>
        <Menu to={'/products'} title={'Products'}/>
      </nav>
    </div>
  );
}


const Menu = ({to, title}) => {
    return (
        <NavLink to={to} className={({isActive})=>isActive ? 'text-red-500' : '' }>{title}</NavLink>
    )
}
export default Navbar;
