import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { add_pack } from "../../actions/packs";

export class Form extends Component {
  state = {
    name: "",
    RFID: "",
    position: "",
  };

  static propTypes = {
    add_pack: PropTypes.func.isRequired,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, RFID, position } = this.state;
    const pack = { name, RFID, position };
    this.props.add_pack(pack);
    this.setState({
      name: "",
      RFID: "",
      position: "",
    });
  };
  render() {
    const { name, RFID, position } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add pack</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>RFID</label>
            <input
              className="form-control"
              type="RFID"
              name="RFID"
              onChange={this.onChange}
              value={RFID}
            />
          </div>
          <div className="form-group">
            <label>position</label>
            <textarea
              className="form-control"
              type="text"
              name="position"
              onChange={this.onChange}
              value={position}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { add_pack })(Form);
