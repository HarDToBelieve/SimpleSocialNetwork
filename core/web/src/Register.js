import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function FieldGroup({ id, label, help, type}) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type={type}/>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class Register extends React.Component {
  render() {
      return (
        <form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="username"
            placeholder="Your username"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="birthday"
            placeholder="Your DOB"
          />
          <FieldGroup
            id="formControlsPassword"
            label="password"
            type="password"
          />
          <FieldGroup
            id="formControlsPassword"
            label="confirmPassword"
            type="password"
          />
          <LinkContainer to="Login">
            <Button type="submit">
              Submit
            </Button>
          </LinkContainer>
        </form>
      );
  }
}

export default Register;
