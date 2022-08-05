import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";

const Header = () => {
    return (
        <div>
            <NavLink to={PATH.LOGIN}>LOGIN</NavLink>
            <NavLink to={PATH.REGISTRATION}>REGISTRATION</NavLink>
            <NavLink to={PATH.PROFILE}>PROFILE</NavLink>
            <NavLink to={PATH.RESET_PASSWORD}>RESET PASSWORD</NavLink>
            <NavLink to={PATH.ENTER_NEW_PASSWORD}>ENTER NEW PASSWORD</NavLink>
        </div>
    );
};

export default Header;