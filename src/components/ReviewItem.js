import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/ReviewItem.css';

class ReviewList extends Component {
  render() {
    //console.log(this.props);
    const { review, id } = this.props;
    return (
      <li className="list-group-item review-item"> 
        <Link className="float-right review-item-edit-button theme-lightblue" to={`/provider/${id}/review/${review.id}/edit`}>EDIT</Link>
        <div className="review-item-date theme-light">{review.date}</div> 
        <div className="mt-1 font-weight-bold review-item-name theme-dark">{review.name}</div> 
        <div className="mt-3 review-item-body theme-medium">{review.body}</div> 
      </li>
    );
  }
}

export default ReviewList;