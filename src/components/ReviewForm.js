import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {getReview} from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faCheckCircle as okIcon,
	faFrown as errorIcon,
	 faArrowAltCircleRight as arrowIcon  
} from '@fortawesome/free-solid-svg-icons';
import '../css/ReviewForm.css';

class ReviewForm extends Component {

  componentDidMount() {
    // Just to make sure that if the user jumps stright to pathed url for edit that we load the existing review data
    const { reviewId } = this.props;
    if (reviewId){
      this.props.getReview(reviewId);
    }
  }
  
  renderTextArea(field) {
    const { meta: { touched, error } } = field;
		const hasError = touched && error;
		const iconClass = hasError ? "text-danger" : "theme-lightblue" ;
		const inputClass = hasError ? "error" : "" ;

    return (
      <div className="review-form form-group">
						<div className = "col-11">
						<label className="review-form-label theme-lightblue font-weight-light">{field.label}</label>
						<FontAwesomeIcon className={`status-icon ${iconClass}`} icon={hasError?errorIcon:okIcon}/>
						<textarea className={`form-control ${inputClass}`} type="text" {...field.input} />
						<small className="form-text text-danger">
							{touched ? error : ""}
						</small>
						</div>
      </div>
    );
	}
	
	renderInput(field) {
    const { meta: { touched, error } } = field;
		const hasError = touched && error;
		const iconClass = hasError ? "text-danger" : "theme-lightblue" ;
		const inputClass = hasError ? "error" : "" ;

    return (
      <div className="review-form form-group">
				<div className = "col-11">
						<label className="review-form-label theme-lightblue font-weight-light">{field.label}</label>
						<FontAwesomeIcon className={`status-icon ${iconClass}`} icon={hasError?errorIcon:okIcon}/>
						<input className={`form-control ${inputClass}`} type="text" {...field.input} />
						<small className="form-text text-danger">
							{touched ? error : ""}
						</small>
				</div>
      </div>
    );
  }

  onSubmit(values) {
    if (this.props.submitAction){
      this.props.submitAction(values);
    }
  }

  onCancel() {
    if (this.props.cancelAction){
      this.props.cancelAction();
    }
  }

  renderCancelButton(){
    if (!this.props.cancelText){
      return;
    }
    const {cancelText} = this.props;
    return (
      <button className="review-form-cancel-button btn btn m-2" type="button" onClick={this.onCancel.bind(this)} >{cancelText}</button>
    );
  }

  renderSubmitButton(){
    if (!this.props.submitText){
      return;
    }
    const {submitText} = this.props;
    return (
			<div className="review-form-submit-combo">
				<button className="review-form-submit-button btn btn-primary m-2" type="submit" >{submitText}</button>
				<FontAwesomeIcon className="review-form-submit-icon" icon={arrowIcon}/>
			</div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="review-form m-4">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Your Review"
            name="body"
            component={this.renderTextArea}
          />
          <Field
            label="Your Display Name"
            name="name"
            component={this.renderInput}
          />
					<div className = "col-10 offset-1">
						{this.renderSubmitButton()}
						{this.renderCancelButton()}
						
					</div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter your display name";
  }
  if (!values.body) {
    errors.body = "Enter a review";
  }
  return errors;
}

function mapStateToProps({reviews}, {reviewId}) {
  if (!reviewId || !reviews[reviewId]){
    return {};
  }
  const review = reviews[reviewId];
  return {
    initialValues: review
  };
}

export default connect(mapStateToProps, { getReview } )(reduxForm({
  validate,
  form: "ReviewForm"
})(ReviewForm));