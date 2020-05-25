import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";

export const LeftNav: React.FC = () => {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Link style={{ color: "#000" }} to={"/drivers"}>
            Drivers
          </Link>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>
          <Link style={{ color: "#000" }} to={"/circuits"}>
            Circuits
          </Link>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>
          <Link style={{ color: "#000" }} to={"/constructors"}>
            Constructors
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  );
};
