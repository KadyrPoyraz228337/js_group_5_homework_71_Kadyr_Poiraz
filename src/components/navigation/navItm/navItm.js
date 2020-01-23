import React from 'react';
import {NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

import './navItm.css'

const NavItm = (
    {to, children}
) => {
    return (
        <NavItem className='ml-3'>
            <NavLink exact to={to} >{children}</NavLink>
        </NavItem>
    );
};

export default NavItm;