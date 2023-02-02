import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(previousProps) {
    const { error, alert, message } = this.props;
    if (error !== previousProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.RFID) alert.error(`RFID: ${error.msg.RFID.join()}`);
      if (error.msg.position)
        alert.error(`position: ${error.msg.position.join()}`);
      if (error.msg.none_field_errors)
        alert.error(error.msg.none_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }
    if (message !== previousProps.message) {
      if (message.deletePack) alert.success(message.deletePack);
      if (message.addPack) alert.success(message.addPack);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
