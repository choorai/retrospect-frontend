import { RouteObject } from 'react-router-dom';
import LoginPage from '../pages/login/page';
import React from 'react';

const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export default loginRoutes;
