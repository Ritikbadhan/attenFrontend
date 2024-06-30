import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

// Example previous attendance data
const previousAttendance = [
  { date: '2024-06-01', inTime: '09:00 AM', outTime: '05:00 PM' },
  { date: '2024-06-02', inTime: '09:15 AM', outTime: '05:15 PM' },
  { date: '2024-06-03', inTime: '09:30 AM', outTime: '05:30 PM' },
  // More records...
];

const UserDashboard = () => {
  const [attendanceDate, setAttendanceDate] = useState(new Date());
  const [inTime, setInTime] = useState(new Date());
  const [outTime, setOutTime] = useState(new Date());

  const handleSetAttendance = () => {
    // Add logic to set attendance
    alert(`Attendance set for ${attendanceDate} with In-time: ${inTime} and Out-time: ${outTime}`);
  };

  const handleSignOut = () => {
    // Add logic for signing out
    alert('User signed out');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Dashboard
            </Typography>
            <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Set Attendance */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" gutterBottom>
                  Set Attendance
                </Typography>
                <DatePicker
                  label="Attendance Date"
                  value={attendanceDate}
                  onChange={(newValue) => setAttendanceDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  fullWidth
                />
                <TimePicker
                  label="In Time"
                  value={inTime}
                  onChange={(newValue) => setInTime(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  fullWidth
                  sx={{ mt: 2 }}
                />
                <TimePicker
                  label="Out Time"
                  value={outTime}
                  onChange={(newValue) => setOutTime(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  fullWidth
                  sx={{ mt: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={handleSetAttendance}
                >
                  Set Attendance
                </Button>
              </Paper>
            </Grid>
            {/* Previous Attendance Records */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" gutterBottom>
                  Previous Attendance Records
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>In Time</TableCell>
                      <TableCell>Out Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {previousAttendance.map((record) => (
                      <TableRow key={record.date}>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.inTime}</TableCell>
                        <TableCell>{record.outTime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default UserDashboard;
