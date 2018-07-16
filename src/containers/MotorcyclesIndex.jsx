import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class MotorcyclesIndex extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchMotorcycles();
  }

  render() {

    return (
      <div className='row'>
        <div className="col-xs-4 text-center">
          <h1>WELCOME TO {this.props.garage}'S GARAGE</h1>
          <Link to="/motorcycles/new">
            <h3>ADD NEW MOTORCYCLE</h3>
          </Link>
        </div>
        <div className='col-xs-8 text-center'>
        {this.props.motorcycles.map((motorcycle) => {
          return (
            <Link to={`/motorcycles/${motorcycle.id}`} key={motorcycle.id}>
             <div className="motorcycle-index">
               <h3>{motorcycle.brand}</h3>
               <p>{motorcycle.model}</p>
             </div>
            </Link>
            )
          })}
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    motorcycles: state.motorcycles,
    garage: state.garage
  }
}

import { fetchMotorcycles } from '../actions/';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMotorcycles }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MotorcyclesIndex);
