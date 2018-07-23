import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { patchReview, deleteReview, getReviews } from "../actions";

class ReviewList extends Component {
  onSubmit(values) {
    const { reviewId, id } = this.props.match.params;
    this.props.patchReview(reviewId, values, () => {
			this.props.history.push(`/provider/${id}`);
			// this shound't be nessecery but the API doesn't return the updated record upon patch so I can't update it in the state
			this.props.getReviews(id);
    });
  }

  onCancel() {
    const { reviewId, id } = this.props.match.params;
    this.props.deleteReview(reviewId, () => {
			this.props.history.push(`/provider/${id}`);
			// this shound't be nessecery but the API doesn't return the deleted record upon deletion so I can't pull it from the state
			this.props.getReviews(id);
    });
  }

  render() {
    const { reviewId } = this.props.match.params;
    return (
      <ReviewForm 
        reviewId = {reviewId}
        submitText='Update' 
        cancelText='Remove' 
        submitAction={this.onSubmit.bind(this)}
        cancelAction={this.onCancel.bind(this)}
      />
    );
  }
}

export default connect(null, { patchReview, deleteReview, getReviews })(ReviewList);