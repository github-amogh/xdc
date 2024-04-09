import React from "react";
import "./Header.css";
import SavedSearchIcon from '@mui/icons-material/SavedSearch'; 

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://ncrdbmd.nitte.edu.in/images/nittedu.jpg"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SavedSearch
        className="header_searchIcon"
        />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Guests Hello!!</span>
          <span className="header_optionLineTwo">Sign In!</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
