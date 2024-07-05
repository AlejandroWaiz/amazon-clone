import React from "react";
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header(){

    return(
        <div className="header">

            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello guest</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <div className="header__optionCart">
                    <ShoppingCartIcon/>
                    <span className="header__optionLineTwo header__cartCount">0</span>
                </div>

            </div>

        </div>
    )

}