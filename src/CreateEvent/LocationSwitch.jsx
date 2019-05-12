import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export const LocationSwitch = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    zip: '',
    alternativeLocation: false
  });


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    setForm(Object.assign({}, form, {
      [name]: value
    }));
  }

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={form.alternativeLocation}
              onChange={handleInputChange}
              color="primary"
              id="alternativeLocation"
            />
          }
          label="Alternative Location"
        />
        <br />
      </FormGroup>
      {form.alternativeLocation && <div>
        <TextField id="name" type="text" label="Name" value={form.name} onChange={handleInputChange} />
        <br />
        <TextField id="address" type="text" label="Adress" value={form.address} onChange={handleInputChange} />
        <br />
        <TextField id="zip" type="text" label="ZIP code" value={form.zip} onChange={handleInputChange} />
      </div>}

    </div>
  )
}
