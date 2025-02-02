import React from 'react';
import { BrowserRouter as Router, useRoutes, Routes, Route } from 'react-router-dom';
import routes from './routes';
import TemplateSelection from './pages/templateSelection/TemplateSelection';
import FourLTemplate from './pages/templates/4L/page';
import CreateRoom from './pages/room/create/page';

const App: React.FC = () => {
  return useRoutes(routes);
};

// App에서는 Router를 사용할 수가 없어서 wrapper 객체를 만들어서 사용
const AppWrapper: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/template-selection" element={<TemplateSelection />} />
        <Route path="/templates/4L" element={<FourLTemplate />} />
        <Route path="/room/create" element={<CreateRoom />} />
      </Routes>
    </Router>
  );
};

export default AppWrapper;
