import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function App() {
  return (
    <React.Fragment key={"left"}>

      <MediaCard />

    <Button onClick={toggleDrawer("left", true)}>Left</Button>
    <Drawer
      anchor={"left"}
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
    >
      {/* {list(anchor)} */}
    </Drawer>
  </React.Fragment>
  );
}