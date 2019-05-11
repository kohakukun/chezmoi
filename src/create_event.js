import React from 'react';
import TextField from '@material-ui/core/TextField';
import { red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {
  state = {
    selectedValue: 'a',
};


  handleChange = event => {
    this.setState({ 
        selectedValue: event.target.value});
  };

  render() {
    return (
      <FormGroup row>
       
       <FormControlLabel
          control={
            <Switch
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
            <Switch
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
            <Switch
              checked={this.state.selectedValue === 'c'}
              onChange={this.handleChange}
              value="c"
              color="primary"
            />
          }
          label="FLEISCH!!!!"
        /> 

      </FormGroup>
    );
  }
}


class CreateEvent extends React.Component {
    render() {
        return (
        
        <div style={{backgroundColor:'grey'}}>
            <TextField id="title" type="text" label="enter title" />
            <br/>
            <TextField id="description" type="text" label="enter title" multiline="true" rows="5" />
            <br/>
            <h1>
                Details:
            </h1>
            <SwitchLabels/>    

        </div>
        );
    }
}



export default CreateEvent;