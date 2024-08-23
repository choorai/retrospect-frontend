import { RouteObject } from 'react-router-dom';
import LoginPage from '../pages/login/page';
import React from 'react';

const homeRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export default homeRoutes;
