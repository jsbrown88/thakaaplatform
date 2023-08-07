import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentication from './components/Authentication';
import UserProfile from './components/UserProfile';
import ProductListing from './components/ProductListing';
import ChatSystem from './components/ChatSystem';
import InvestorAccount from './components/InvestorAccount';
import DoctorAccount from './components/DoctorAccount';
import UserSupport from './components/UserSupport';
import TrainingInfo from './components/TrainingInfo';
import Notifications from './components/Notifications';
import Forum from './components/Forum';
import Feedback from './components/Feedback';
import VerificationBadge from './components/VerificationBadge';
import Admin from './components/Admin';
import SEOAnalytics from './components/SEOAnalytics';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Authentication} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/products" component={ProductListing} />
        <Route path="/chat" component={ChatSystem} />
        <Route path="/investor" component={InvestorAccount} />
        <Route path="/doctor" component={DoctorAccount} />
        <Route path="/support" component={UserSupport} />
        <Route path="/training" component={TrainingInfo} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/forum" component={Forum} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/verify" component={VerificationBadge} />
        <Route path="/admin" component={Admin} />
        <Route path="/seo-analytics" component={SEOAnalytics} />
        <Route path="/" component={ProductListing} />
      </Switch>
    </Router>
  );
}

export default App;
