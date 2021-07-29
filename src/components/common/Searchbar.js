import React from "react";
import { SearchOutlined } from "@material-ui/icons";

function Searchbar() {
  return (
    <div className="sidebar__searchbar">
      <div className="sidebar__searchbarContainer">
        <SearchOutlined />
        <input type="text" placeholder="Search or Start A New Chat" />
      </div>
    </div>
  );
}

export default Searchbar;
