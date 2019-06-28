import React, { Component } from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';
import DashboardPage from '../components/Home/DashboardPage';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import Speakers from '../components/Speakers';
import Sponsors from '../components/Sponsors';
import Team from '../components/Team';
import Tickets from '../components/Tickets';
import NotFoundPage from '../routers/NotFoundPage';






class AppRouter extends Component {

    render() { 
        return ( 
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={DashboardPage} exact={true}/>
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/speakers" component={Speakers}/>
                    <Route path="/sponsors" component={Sponsors}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/tickets" component={Tickets}/>
                    <Route
                    path="/ted"
                    component={ Redirect }
                    loc="https://ted.com"
                    />
                    <Route component={NotFoundPage}/>
                </Switch> 
            </div>
         );
    }
}
 
export default AppRouter;




