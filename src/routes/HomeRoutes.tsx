import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/page';

const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];

export default homeRoutes;
