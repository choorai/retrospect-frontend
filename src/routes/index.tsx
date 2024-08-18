import { RouteObject } from 'react-router-dom';
import homeRoutes from './HomeRoutes';
import mainServiceRoutes from './MainServiceRoutes';
import reHubTemplateRoutes from './ReHubTemplatesRoutes';
import ourStoryRoutes from './OurStoryRoutes';
import customerSupportRoutes from './CustomerSupportRoutes';

const routes: RouteObject[] = [
  ...homeRoutes,
  ...mainServiceRoutes,
  ...reHubTemplateRoutes,
  ...ourStoryRoutes,
  ...customerSupportRoutes,
];

export default routes;
