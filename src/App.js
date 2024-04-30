import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import NewPost from "./components/NewPost";
import { Route, Routes } from 'react-router-dom';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/post/:postId" component={PostDetails} />
        <Route path="/account" element={<AccountPage />} />
      </Switch>
      <NewPost />
    </Router>
  );
}

export default App;
