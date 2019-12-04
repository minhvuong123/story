import React, { Component } from 'react';


import './breadcrumb.css';

class Breadcrumb extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb" className="d-none d-sm-inline-block">
        <ol className="breadcrumb mb-1">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Category</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    )
  }
}

export default Breadcrumb;
