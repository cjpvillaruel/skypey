import React from 'react';
import store from '../../store';
import Sidebar from '../../components/Sidebar';
import Main from '../../containers/Main';
import _ from 'lodash';
import './App.css';
const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};
export default App;
