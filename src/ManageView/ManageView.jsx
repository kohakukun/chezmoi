import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import pizza from '../static/media/Pizza.png';
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
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={event.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={pizza}
        title="Paella dish"
      />
      <CardContent>
        <Typography component="p">
          {event.description}
        </Typography>
        <Divider/>
        <List className={classes.root}>
        {attendees.map((foodEvent, index)=> {
          return <AttendeesItem key={index} foodEvent={{...foodEvent}}/>
        })}
    </List>
      </CardContent>
    </Card>
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