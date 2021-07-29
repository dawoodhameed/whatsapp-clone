import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, DonutLarge, MoreVert } from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Name</h3>
          <p>Last Seen</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
