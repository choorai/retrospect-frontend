import React from 'react';
import { RouteObject } from 'react-router-dom';
import CustomerSupportPage from '../pages/customer_support/page';

const customerSupportRoutes: RouteObject[] = [
  {
    path: '/customer-support',
    element: <CustomerSupportPage />,
  },
];

export default customerSupportRoutes;
