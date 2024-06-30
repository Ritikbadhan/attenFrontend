import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '32px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '32px',
  },
  card: {
    maxWidth: '345px',
  },
  media: {
    height: '140px',
  },
  button: {
    marginTop: '16px',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        Welcome to Attendance Tracker
      </Typography>
      <Typography variant="h5" paragraph>
        Simplify and streamline your attendance management with our user-friendly application.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/345x140"
              title="Track Attendance"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Track Attendance
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Easily track attendance with just a few clicks. Ensure everyone is accounted for.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/345x140"
              title="Generate Reports"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Generate Reports
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Generate detailed reports to analyze attendance patterns and trends.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/345x140"
              title="Manage Users"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Manage Users
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Add, remove, and update user information to keep your records accurate.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" className={classes.button}>
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
