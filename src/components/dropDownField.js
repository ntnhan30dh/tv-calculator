import React from "react";

import { Dropdown, Label } from "semantic-ui-react";

const DropDownField = (props) => {
  return (
    <div>
      <Dropdown
        placeholder={props.placeholder}
        fluid
        search
        selection
        options={props.options}
        onChange={(e, { value }) => props.handleChange(value)}
        defaultValue={props.defaultValue}
        value={props.value}
      />
      {props.isChecking && !props.value && (
        <Label basic color="red" pointing="above">
          Please enter {props.label}
        </Label>
      )}
    </div>
  );
};

export default DropDownField;
