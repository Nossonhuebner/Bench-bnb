import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import { fetchBenches } from './actions/bench_actions';



document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
  }

  const store = configureStore(preloadedState);
  window.store = store;
  delete window.currentUser;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);


  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchBenches = fetchBenches;
});
