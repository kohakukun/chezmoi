import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  menu: {
    background: theme.palette.primary.main,
    width: '80%',
    height: '100%',
    margin: 'auto',
    padding: '9px',
    borderBottomRightRadius: '12px',
    borderBottomLeftRadius: '12px',
  }
}));


export const DetailView = ({description}) => {
  const classes = useStyles();
  return  (
    <div className={classes.menu}>
      <div className={classes.menu}>
        {description}
      </div>
    </div>

  );
}
