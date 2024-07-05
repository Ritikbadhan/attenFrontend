import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';
import AllUsers from '../component/AllUsers';
import Admins from '../component/Admins';
import AdminDrawer from '../component/SideNav'
import { ErrorPage } from './NotFound';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  let tabComponent;
  switch (selectedTab) {
    case 0:
      tabComponent = <AllUsers />;
      break;
    case 1:
      tabComponent = <Admins />;
      break;
    default:
      tabComponent = <ErrorPage />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <AdminDrawer setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Container>
          <Grid item xs={12} md={6}>
            {tabComponent}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
