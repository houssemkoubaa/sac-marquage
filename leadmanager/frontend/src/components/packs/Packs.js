import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPacks, deletePack } from "../../actions/packs";

export class Packs extends Component {
  static propTypes = {
    packs: PropTypes.array.isRequired,
    getPacks: PropTypes.func.isRequired,
    deletePacks: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPacks();
  }

  render() {
    return (
      <Fragment>
        <h2>Packs List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>RFID</th>
              <th>position</th>
            </tr>
          </thead>
          <tbody>
            {this.props.packs.map((pack) => (
              <tr key={pack.id}>
                <td>{pack.id}</td>
                <td>{pack.name}</td>
                <td>{pack.RFID}</td>
                <td>{pack.position}</td>
                <td>
                  <button
                    onClick={this.props.deletePack.bind(this, pack.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {""}Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  packs: state.packs.packs,
});

export default connect(mapStateToProps, { getPacks, deletePack })(Packs);
