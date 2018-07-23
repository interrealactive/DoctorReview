import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReviews, getProvider, selectProvider } from '../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap as mapIcon } from '@fortawesome/free-solid-svg-icons'
import '../css/ProviderDetails.css';

class ProviderDetails extends Component {

  componentDidMount() {
    // Just to make sure that if the user jumps stright to pathed url insead of selecting from search results that at least the requested provider is loaded
    const { id } = this.props.match.params;
		this.props.getProvider(id);
		this.props.getReviews(id);
		this.props.selectProvider(id);
  }

	
	componentWillReceiveProps(newProps) {
		// I'm not sure if this is the ideal place and method to do this. componentDidMount doesn't trigger on route variable changes though
		// and I don't want to call getReviews unless the provider ID has changed, not on every render call.
		if (this.props.match.params.id !== newProps.match.params.id) {
			const {id} = newProps.match.params;
			this.props.getReviews(id);
			this.props.selectProvider(id);
		}
	}

  render() {
		const { reviewCount, provider } = this.props;

		if (!provider) {
			return ("");
		}

    return (
      <div className="provider-details">
        <div className="row">
          <div className="col">
							<img className="provider-details-image float-left rounded-circle" alt="" src={provider.imageUrl} />
							<div className="col">
							<div className="provider-details-name text-left mt-3 theme-darkblue">{provider.name}</div>
							<div className="provider-details-speciality text-left mt-2 font-weight-light theme-lightblue">{provider.speciality}</div>
							<div className="provider-details-reviews text-left mt-1 font-weight-light">{`${reviewCount} review${(reviewCount === 1) ? '' : 's'}`}</div>
						</div>
          </div>
          <div className="col-4">
						<FontAwesomeIcon className="provider-details-address-icon theme-darkblue" icon={mapIcon}/>
						<div className="provider-details-address-details">
							<div className="mt-3 provider-details-address-label font-weight-light"> ADDRESS</div>
							<div className="provider-details-address theme-lightblue">{provider.street}</div>
							<div className="provider-details-address mt-1 theme-lightblue">{`${provider.city}, ${provider.state} ${provider.zipcode}`}</div>
						</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
	const { id } = props.match.params;
	const reviewCount = Object.keys(state.reviews).length;
	const provider = state.providers[id];
  return {
		reviewCount: reviewCount,
		provider: provider
  };
}

export default connect (mapStateToProps,{ getReviews, getProvider, selectProvider })(ProviderDetails);