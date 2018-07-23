import React, { Component } from 'react';
import '../css/DoctorReview.css';
import ProviderSearch from './ProviderSearch';
import ProviderList from './ProviderList';
import ProviderDetail from './ProviderDetails';
import ReviewNew from './ReviewNew';
import ReviewEdit from './ReviewEdit';
import ReviewList from './ReviewList';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


class DoctorReview extends Component {
  render() {
    return (
      <BrowserRouter>
			
        <div className="doctor-review col-sm-10 offset-sm-1">
          <ProviderSearch />
          <div className="row">
            <div className="list-frame col-sm-4">
              <ProviderList />
            </div>
            <div className="detail-frame col-sm-8">
							<Route path="/provider/:id" component={ProviderDetail} />
							<Switch>
								
                <Route path="/provider/:id/review/:reviewId/edit" component={ReviewEdit} />
                <Route path="/provider/:id/review/new" component={ReviewNew} />
								<Route path="/provider/:id/" component={ReviewList} />
							</Switch>   
            </div>
          </div>
        </div>
				
      </BrowserRouter>
    );
  }
}

export default DoctorReview;
