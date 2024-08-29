import React from 'react';
import { RouteObject } from 'react-router-dom';
import RetrospectSettingsPage from '../pages/retrospect-setting/page';

const retrospectSettingsRoutes: RouteObject[] = [
  {
    path: '/retrospect-settings',
    element: <RetrospectSettingsPage />,
  },
];

export default retrospectSettingsRoutes;
