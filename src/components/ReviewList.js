import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReviews } from "../actions";
import { Link } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import '../css/ReviewList.css';

class ReviewList extends Component {

  renderReviewList() {
    if (!this.props.reviews)
      return;

    const { id } = this.props.match.params;
    return _.map(this.props.reviews, review => {
      return (
        <ReviewItem key={review.id} review={review} id={id}></ReviewItem>
      );
    });
  }

  render() {
		const { id } = this.props.match.params;
    return (
			<div className="row">
          <div className="col-sm-9">
						<div className="review-list">
							{this.renderReviewList()}
						</div>
          </div>
          <div className="col-sm-3">
            <Link className="new-review-btn btn btn-primary" to={`/provider/${id}/review/new`}>
              Leave a Review
            </Link>
          </div>
        </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  };
}

export default connect(mapStateToProps,{ getReviews })(ReviewList);