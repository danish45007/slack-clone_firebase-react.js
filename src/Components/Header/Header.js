import React from 'react';
import "./Header.css";
import {Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                className="header__avatar"
                variant="square"
                // alt={user?.displayName}
                // src={user?.photoUrl}
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <input
                className="search-query" 
                placeholder="Search UnNamed Developers"
                type="text"
                />
                <SearchIcon />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
