import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/nav';
import Land from './components/land/land';
import RecentPost from './components/recent-post/recent-post';
import FeaturedWork from './components/works/featured-work';
import Blog from './components/blog/blog';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import DesigningDashboards from './components/works/content/designing-dashboards'
import VibrantPortraits from './components/works/content/vibrant-portraits'
import DaysMalayalam from './components/works/content/days-malayalam'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route exact path="/react-gh-pages">
            <Land />
            <RecentPost />
            <FeaturedWork />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
          <Route path="/works/designingdashboards">
            <DesigningDashboards />
          </Route>
          <Route path="/works/vibrantportraits">
            <VibrantPortraits />
          </Route>
          <Route path="/works/daysmalayalam">
            <DaysMalayalam />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
