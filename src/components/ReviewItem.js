import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/ReviewItem.css';

class ReviewList extends Component {
  render() {
    //console.log(this.props);
    const { review, id } = this.props;
    return (
      <li className="list-group-item review-item"> 
        <Link className="float-right edit-btn theme-lightblue" to={`/provider/${id}/review/${review.id}/edit`}>EDIT</Link>
        <div className="rev-item-date theme-light">{review.date}</div> 
        <div className="mt-1 font-weight-bold rev-item-name theme-dark">{review.name}</div> 
        <div className="mt-3 rev-item-body theme-medium">{review.body}</div> 
      </li>
    );
  }
}

export default ReviewList;