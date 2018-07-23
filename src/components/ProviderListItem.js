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
		const selectedCss = (provider.id === parseInt(selection,10)) ? "selected-provider" : "unselected-provider";
		let rank = "";
		let rankCss = "";
		switch (provider.rank)
		{
			case 1:
				rank = "HIGH";
				rankCss = "rank1";
				break;
			case 2:
				rank = "FAIR";
				rankCss = "rank2";
				break;
			case 3:
				rank = "LOW";
				rankCss = "rank3";
				break;
			 default:
		}
    return (
        <li className={`provider-list-item list-group-item ${selectedCss}`}>
					<Link to={`/provider/${provider.id}`}>
						<img className="provider-list-image p-3 float-left rounded-circle" alt="" src={provider.imageUrl} />
						<div className="provider-list-info h-100">
							<div className="float-right">
								<FontAwesomeIcon className="arrow-icon theme-lightblue m-3" icon={arrowIcon}/>
							</div>
							<div className="provider-list-name theme-lightblue">{provider.name}</div>
							<span>
							<div className={`provider-list-rank btn ${rankCss}`}>{rank}</div>
							<div className="ml-2 provider-list-speciality theme-medium">{provider.speciality}</div>
							</span>
							<div className="provider-list-street theme-medium">{provider.street}</div>
							{/* This would idealy come from the prodiver endpoint on the API backend rather than loading every review up front */}
							<div className="provider-list-reviews theme-medium">150 reviews</div>
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