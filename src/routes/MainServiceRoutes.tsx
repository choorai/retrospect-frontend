import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainServicePage from '../pages/main_service/page';

const mainServiceRoutes: RouteObject[] = [
  {
    path: '/main-service',
    element: <MainServicePage />,
  },
];

export default mainServiceRoutes;
