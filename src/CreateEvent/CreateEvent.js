import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { LocationSwitch } from './LocationSwitch';


class SwitchLabels extends React.Component {
  state = {
    selectedValue: 'a',
  };


  handleChange = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  render() {
    return (
      <FormGroup row>

        <FormControlLabel
          control={
            <Radio
              checked={this.state.selectedValue === 'a'}
              onChange={this.handleChange}
              value="a"
              color="primary"
            />
          }
          label="Vegetarian"
        />
        <FormControlLabel
          control={
            <Radio
              checked={this.state.selectedValue === 'b'}
              onChange={this.handleChange}
              value="b"
              color="primary"
            />
          }
          label="Vegan"
        />
        <FormControlLabel
          control={
            <Radio
              checked={this.state.selectedValue === 'c'}
              onChange={this.handleChange}
              value="c"
              color="primary"
            />
          }
          label="Meat"
        />
      </FormGroup>
    );
  }
}


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    padding: '9px',
  }
}));

export const CreateEvent = () => {
  const classes = useStyles();
  var current_date = new Date();

  var today = current_date.getFullYear() + '-' + ('0' + (current_date.getMonth() + 1)).slice(-2) + '-' + ('0' + current_date.getDate()).slice(-2);
  var now = ('0' + current_date.getHours()).slice(-2) + ':' + ('0' + current_date.getMinutes()).slice(-2) + ':' + ('0' + current_date.getSeconds()).slice(-2);

  const [form, setForm] = useState({
    title: '',
    description: '',
    date: today,
    time: now,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    setForm(Object.assign({}, form, {
      [name]: value
    }));
  }

  const handleSubmit = () => {
    const eventsStr = localStorage.getItem('events');
    const events = eventsStr ? JSON.parse(eventsStr) : [];
    events.push(form);
    localStorage.setItem('events', JSON.stringify(events));
  }

  return (
    <div className={classes.root}>
    <TextField
        id="title"
        type="text"
        label="enter title"
        onChange={handleInputChange}
        value={form.title}
      />
      <br />
      <TextField
        id="description"
        type="text"
        label="enter description"
        multiline rows="5"
        onChange={handleInputChange}
        value={form.description}
      />
      <h3>Details:</h3>
      <TextField
        id="date"
        type="date"
        value={form.date}
      />
      <TextField
        id="time"
        type="time"
        value={form.time}
      />
      <SwitchLabels />
      <LocationSwitch />
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Create event
        </Button>
    </div>
  );
}
