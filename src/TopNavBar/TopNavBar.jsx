import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
}));

export const TopNavBar = ({handleDrawerToggle}) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

