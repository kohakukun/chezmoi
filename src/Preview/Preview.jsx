import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Table } from '../Table';
import { MenuThingy } from './MenuThingy';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    background: theme.palette.background.paper,
    flexGrow: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

  }
}));

export const Preview = ({price, tags, title, height}) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h5" color="inherit" noWrap>
            {title}
          </Typography>
        </div>
        <Table/>
        <MenuThingy
          price={price}
          tags={tags}
        />
      </div>
  );
}

Preview.defaultProps = {
  price: 2,
  title: 'Some Test',
  tags: ['vegan'],
}

