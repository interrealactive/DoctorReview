import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProviders, searchProviders } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../css/ProviderSearch.css';

class ProviderSearch extends Component {
	constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
	}
	
  componentDidMount() {
    this.props.getProviders();
	}
	
	onInputChange(event) {
		this.setState({ term: event.target.value });
		this.props.searchProviders(this.state.term);
  }

  render() {
    return (
      <div className="provider-search row align-items-center">
        <h2 className="col-sm-2 text-center">
          Doctors
        </h2>
				<div className = "col-sm-10 provider-search-container">
					<FontAwesomeIcon className="provider-search-icon" icon={faSearch}/>
					<input onChange={this.onInputChange} type="text" className="provider-search-input form-control" placeholder="Search doctors by name"/>
				</div>
      </div>
    );
  }
}

export default connect(null, { getProviders, searchProviders })(ProviderSearch);