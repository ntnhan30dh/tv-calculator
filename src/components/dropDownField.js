import React from "react";

import { Dropdown} from "semantic-ui-react";

const DropDownField = (props) => {
  return (
     <div>
     <Dropdown
            placeholder={props.placeholder}
           // fluid
            search
            selection
            options={props.options}
            onChange={(e, { value }) => props.handleChange(value)}
            defaultValue={props.value}
            value={props.value}
          />
    </div>
  );
};

export default DropDownField;
