import { Avatar } from "@material-ui/core";
import React from "react";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Person Name</h2>
        <p>Last Message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
