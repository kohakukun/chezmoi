import React from 'react';
import './App.css';
import { TopNavBar } from './TopNavBar';
import { AppDrawer } from './AppDrawer'
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {FoodEventCarousel} from './FoodEventCarousel';
import { LoginPage } from './LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RegisterUserPage } from './RegisterUserPage/RegisterUserPage';
import { Preview } from './Preview';
import CreateEvent from './create_event';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));


const App = (props) => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }






  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <TopNavBar handleDrawerToggle={handleDrawerToggle} />
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <AppDrawer />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <AppDrawer />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
          <Route path="/login" component={LoginPage} />
          <Route path="/register-user" component={RegisterUserPage} />
          <Route path="/dining" component={Preview} />
          <Route path="/create-event" component={CreateEvent} />
    
      </main>
    </div>
    </Router>
  );
}

export default App;
