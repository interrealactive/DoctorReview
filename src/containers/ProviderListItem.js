import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight as arrowIcon } from '@fortawesome/free-solid-svg-icons'
import '../css/ProviderListItem.css';

class ProviderListItem extends Component {

	loadProvider(){
	}

  render() {
		const {provider, selection} = this.props;
		const selectedCss = (provider.id === parseInt(selection,10)) ? "provider-list-item-selected-provider" : "provider-list-item-unselected-provider";
		let rank = "";
		let rankCss = "";
		switch (provider.rank)
		{
			case 1:
				rank = "HIGH";
				rankCss = "provider-list-item-rank1";
				break;
			case 2:
				rank = "FAIR";
				rankCss = "provider-list-item-rank2";
				break;
			case 3:
				rank = "LOW";
				rankCss = "provider-list-item-rank3";
				break;
			 default:
		}
    return (
        <li className={`provider-list-item list-group-item ${selectedCss}`}>
					<Link to={`/provider/${provider.id}`}>
						<img className="provider-list-item-image p-3 float-left rounded-circle" alt="" src={provider.imageUrl} />
						<div className="provider-list-item-info h-100">
							<div className="float-right">
								<FontAwesomeIcon className="provider-list-item-arrow-icon theme-lightblue m-3" icon={arrowIcon}/>
							</div>
							<div className="provider-list-item-name theme-lightblue">{provider.name}</div>
							<span>
							<div className={`provider-list-item-rank btn ${rankCss}`}>{rank}</div>
							<div className="ml-2 provider-list-item-speciality theme-medium">{provider.speciality}</div>
							</span>
							<div className="provider-list-item-street theme-medium">{provider.street}</div>
							{/* This would idealy come from the prodiver endpoint on the API backend rather than loading every review up front */}
							<div className="provider-list-item-reviews theme-medium">150 reviews</div>
						</div>
					</Link>
        </li>
    );
  }
}

function mapStateToProps(state) {
  return {
		selection: state.selection
  };
}

export default connect(mapStateToProps)(ProviderListItem);