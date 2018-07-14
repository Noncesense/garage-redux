import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MotorcyclesIndex extends Component {

  render() {
    console.log(this.props.motorcycles);
    return (
      <div>
        {this.props.motorcycles.map((motorcycle) => {
        return (
          <Link to={`/motorcycles/${motorcyle.id}`} key={motorcycle.id}>
           <div className="post-item">
             <h3>{motorcycle.brand}</h3>
             <p>{motorcycle.model}</p>
           </div>
          </Link>
          )
        })}
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    motorcycles: state.motorcycles
  }
}



export default connect(mapStateToProps)(MotorcyclesIndex);
