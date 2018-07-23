import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import ProviderListItem from './ProviderListItem';
import '../css/ProviderList.css';

class ProviderList extends Component {
  renderProviderList(){
    if (!this.props.providers)
      return;
    return _.map(this.props.providers, provider => {
      return (
        <ProviderListItem key={provider.id} provider={provider}></ProviderListItem>
      );
    });
  }

  render() {
    return (
      <div className="provider-list">
        <ul className="list-group provider-list-container">
          {this.renderProviderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    providers: state.providers
  };
}
export default connect(mapStateToProps)(ProviderList);