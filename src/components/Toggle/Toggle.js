import React from "react";
import { connect } from "react-redux";

const Toggle = ({ messageVisibility }) => {
  return (
    <div>
      {messageVisibility && (
        <p>You will be seeing this if redux action is toggled</p>
      )}
      <button>Toggle</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle);
