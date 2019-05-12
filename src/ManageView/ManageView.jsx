import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { FoodEventCard } from '../FoodEventCard';
import { AttendeesItem } from './AttendeesItem';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export const ManageView = ({attendees, event}) => {
  const classes = useStyles();
  return (
    <FoodEventCard event={event}>
      <List className={classes.root}>
        {attendees.map((foodEvent, index)=> {
          return <AttendeesItem key={index} foodEvent={{...foodEvent}}/>
        })}
      </List>
    </FoodEventCard>
  );
}

ManageView.defaultProps = {
  event: {
    title: 'Pizza',
    description: 'Some tasty pizza',
  },
  attendees: [
    {title: 'First test', price: 2, tags: ['vegan'], userRating: 5, foodRating: 2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Free  meal', price: 0, tags: ['glutenFree'], userRating: 0, foodRating: 2.2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree'], userRating: 2.2, foodRating: 5. , image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'}
  ]
};