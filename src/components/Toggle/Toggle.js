import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMessage } from "./actions";

const Toggle = () => {
  const messageVisibility = useSelector(state => state.toggle.messageVisibility);
  const dispatch = useDispatch();
  return (
    <div>
      {messageVisibility && (
        <p>You will be seeing this if redux action is toggled</p>
      )}
      <button onClick={() => dispatch(toggleMessage())}>Toggle Me</button>
    </div>
  );
};

export default Toggle;
