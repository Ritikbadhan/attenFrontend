import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = 240;

const AdminDrawer = ({setSelectedTab,selectedTab}) => {

  const listItems = [
    { text: 'All Users', icon: <PeopleIcon /> },
    { text: 'Other Admins', icon: <PeopleIcon /> },
    { text: 'Attendance Records', icon: <PeopleIcon /> },
    { text: 'Make Admin', icon: <AddIcon /> },
    { text: 'Add User', icon: <AddIcon /> },
  ];

  const handleListItemClick = (event, index) => {
    setSelectedTab(index);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {listItems.map((item, index) => (
            <ListItem
              button
              key={index}
              selected={selectedTab === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider />
        </List>
      </Box>
    </Drawer>
  );
};

export default AdminDrawer;
