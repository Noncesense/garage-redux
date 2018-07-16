import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MotorcyclesShow extends Component {

  componentDidMount() {

    if(!this.props.motorcycle) {
      this.props.fetchMotorcycle(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteMotorcycle(this.props.match.params.id, (motorcycle) => {
    this.props.history.push('/'); // Navigate after submit
      return motorcycle;
    });
  }

  render() {
    if(!this.props.motorcycle) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <div className="post-item">
            <h3>{this.props.motorcycle.brand}</h3>
            <p>{this.props.motorcycle.model}</p>
          </div>
          <button onClick={this.handleClick}>
          Delete
          </button>
          <Link to="/">
            Back
          </Link>
      </div>

      )
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const motorcycle = state.motorcycles.find(p => p.id === idFromUrl);
  return { motorcycle };
}

import { fetchMotorcycle, deleteMotorcycle } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMotorcycle, deleteMotorcycle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MotorcyclesShow);
