import { RouteObject } from 'react-router-dom';
import InvitationPage from '../pages/invitation/page';
import React from 'react';

const InvitationRoutes: RouteObject[] = [
  {
    path: '/invitation',
    element: <InvitationPage />,
  },
];

export default InvitationRoutes;
