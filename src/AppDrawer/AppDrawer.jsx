import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import DiningIcon from '@material-ui/icons/LocalDining';
import SettingsIcon from '@material-ui/icons/Settings';
import HistoryIcon from '@material-ui/icons/History';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import { LoginPage } from '../LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));


// Routing
function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dining">Dining</Link>
            </li>
            <li>
              <Link to="//">History</Link>
            </li>
            <li>
              <Link to="/users/">Settings</Link>
            </li>
          </ul>
        </nav>

      </div>
    </Router>
  );
}


function pickIcons(context) {
  switch (context) {
    case "Dining":
      return <DiningIcon />;
    case "History":
      return <HistoryIcon />;
    case "Settings":
      return <SettingsIcon />;
    default:
      return <DiningIcon />;

  }
}

export const AppDrawer = (selectEvent) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
        <List>
          {['Dining', 'History', 'Settings'].map((text, index) => (
            <ListItem button key={text}
            component={Link} to={'/'+text.toLowerCase()}>
              <ListItemIcon>
                {
                  pickIcons(text)
                }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem button key={text}
            component={Link} to="/login"
              >
              <ListItemIcon>
                <SignOutIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </div>
  );
};
