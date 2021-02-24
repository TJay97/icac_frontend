import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomeTwo from "./components/pages/HomeTwo";
import SpeakersOne from "./components/pages/SpeakersOne";
import TCP from "./components/pages/TCP";
import SpeakersTwo from "./components/pages/SpeakersTwo";
import Past from "./components/pages/SpeakersThree";
import ScheduleOne from "./components/pages/ScheduleOne";
import ScheduleTwo from "./components/pages/ScheduleTwo";
import NotFound from "./components/pages/NotFound";
import Faq from "./components/pages/Faq";
import Author from "./components/pages/Author";
import Register from "./components/pages/Register";
import Workshop from "./components/pages/Workshop";
import Best from "./components/pages/Best";
import Travel from "./components/pages/Travel";
import Contact from "./components/pages/Contact";
import BlogOne from "./components/pages/BlogOne";
import Sponsor from "./components/pages/Sponsor";
import regTest from "./components/pages/reg";
import Camera from "./components/pages/Camera";

// Conditionally render Navigation
const renderNavigation = () => {
    if (!(window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === '/coming-soon' || window.location.pathname === '/error-404')){
        return <Navigation />;
    }
}

const AppRouter = () => {
    return (
        <Router>
            {renderNavigation()}
            <Switch>
                <Route path="/" exact component={HomeTwo} />
                <Route path="/home-two" exact component={HomeTwo} />
                <Route path="/org" exact component={SpeakersOne} />
                <Route path="/tcp" exact component={TCP} />
                <Route path="/explore" exact component={SpeakersTwo} />
                <Route path="/past" exact component={Past} />
                <Route path="/schedule" exact component={ScheduleOne} />
                <Route path="/schedule-2" exact component={ScheduleTwo} />
                <Route path="/cfp" exact component={Faq} />
                <Route path="/author" exact component={Author} />
                <Route path="/travel" exact component={Travel} />
                <Route path="/reg" exact component={Register} />
                <Route path="/workshop" exact component={Workshop} />
                <Route path="/best" exact component={Best} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/keynote" exact component={BlogOne} />
                <Route path="/sponsors" exact component={Sponsor} />
                <Route path="/error-404" exact component={NotFound} />
                <Route path="/registration" exact component={regTest} />
                <Route path="/camera" exact component={Camera} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;