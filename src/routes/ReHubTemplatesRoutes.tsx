import React from 'react';
import { RouteObject } from 'react-router-dom';
import ReHubTemplatesPage from '../pages/re_hub_templates/page';

const reHubTemplateRoutes: RouteObject[] = [
  {
    path: '/re-hub-templates',
    element: <ReHubTemplatesPage />,
  },
];

export default reHubTemplateRoutes;
