import React from 'react';
import { RouteObject } from 'react-router-dom';
import OurStoryPage from '../pages/our_story/page';

const ourStoryRoutes: RouteObject[] = [
  {
    path: '/our-story',
    element: <OurStoryPage />,
  },
];

export default ourStoryRoutes;
