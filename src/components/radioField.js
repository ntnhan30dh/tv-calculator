import React from "react";

import {Form, Radio} from "semantic-ui-react";

const InputText = (props) => {
  return (
     <div className="radioField radios">
     <Form.Field>
              <Radio
                 className={props.value === true ? "active" : ""}
                label="Yes"
                name={props.name}
                value={true}
                checked={props.value === true}
                onChange={(e, { value }) => props.handleChange(value)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
               className={props.value === false ? "active" : ""}
                label="No"
                name={props.name}
                value={false}
                checked={props.value === false}
                onChange={(e, { value }) => props.handleChange(value)}
              />
            </Form.Field>
    </div>
  );
};

export default InputText;
