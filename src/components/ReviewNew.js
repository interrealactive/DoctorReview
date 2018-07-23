import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { postReview, getReviews } from "../actions";

class ReviewList extends Component {
  onSubmit(values) {
    const { id } = this.props.match.params;
    const today = new Date();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    // would be better to have API endpoint attach a UTC timestamp and convert it to local on render
    values["date"] = date;
    values["providerId"] = id
    // json-schema doesn't create indexes automatically so faking it
    values["id"] = Math.round(10000000 + Math.random() * (99999999 - 10000000));
    this.props.postReview(values, () => {
			this.props.history.push(`/provider/${id}`);
			// this shound't be nessecery but the API doesn't return the posted record upon post so I can't add it to the state
			this.props.getReviews(id);
    });
  }

  render() {
    return (
      <ReviewForm submitText='Add Review' submitAction={this.onSubmit.bind(this)} />
    );
  }
}

export default connect(null,{postReview, getReviews})(ReviewList);