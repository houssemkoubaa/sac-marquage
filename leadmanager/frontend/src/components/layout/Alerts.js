import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired,
  };

  componentDidUpdate(previousProps) {
    const { error, alert, position } = this.props;
    if (error !== previousProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.RFID) alert.error(`RFID: ${error.msg.RFID.join()}`);
      if (error.msg.position)
        alert.error(`position: ${error.msg.position.join()}`);
      if (error.msg.none_field_errors)
        alert.error(error.msg.none_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }
    if (position !== previousProps.position) {
      if (position.deletePack) alert.success(position.deletePack);
      if (position.addPack) alert.success(position.addPack);
      if (position.passwordNotMatch) alert.error(position.passwordNotMatch);
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  position: state.positions,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
