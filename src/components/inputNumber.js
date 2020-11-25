import React, { useState } from "react";

import { Input, Label} from "semantic-ui-react";

const InputNumber = (props) => {
  let [keyDown, setKeyDown] = useState(undefined);
  const handleSpotKeyDown =(evt)=>{
    evt.key === 'e' && evt.preventDefault()
    setKeyDown(evt.key)
  }

  return (
  <div>
    <Input
      value={props.value}
      onChange={(e, { value }) => value >= 0 ? props.handleChange(value) : props.handleChange("")}
      type="number"
      onKeyDown={ (evt) => handleSpotKeyDown(evt)  }
    />
    {!/^\d+$/.test(props.value)&&!/^\d+$/.test(keyDown) && keyDown &&(keyDown!=='Backspace')&& (
      <Label basic color="red" pointing="left">
        Please enter a valid number
      </Label>
    )}
  </div>
    
  );
};

export default InputNumber;
