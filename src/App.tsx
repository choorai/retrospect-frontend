import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

const App: React.FC = () => {
  return useRoutes(routes);
};

// App에서는 Router를 사용할 수가 없어서 wrapper 객체를 만들어서 사용
const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
