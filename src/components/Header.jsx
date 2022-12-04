import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var newDate = "";

  newDate = day + "/" + month + "/" + year;
  return (
    <header>
      <h1><HighlightIcon />Keeper {newDate}</h1>
    </header>
  );
}

export default Header;
