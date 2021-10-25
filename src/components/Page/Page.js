import React from 'react';
import './Page.styles.scss';

import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Aboutme from '../pages/Aboutme';
import Resume from '../pages/Resume/Resume';
import ProjectList from '../pages/ProjectList/ProjectList';
import Contact from '../pages/Contact/Contact';

const Page = ({ location, setMenuActive }) => {
  return (
    <div className="page">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={Aboutme} />
            <Route exact path="/homepage" component={Aboutme} />
            <Route exact path="/about" component={Aboutme} />
            <Route exact path="/projects" component={ProjectList} />
            <Route exact path="/testimonials" component={Resume} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Page);