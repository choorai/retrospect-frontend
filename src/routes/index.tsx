import { RouteObject } from 'react-router-dom';
import homeRoutes from './HomeRoutes';
import mainServiceRoutes from './MainServiceRoutes';
import reHubTemplateRoutes from './ReHubTemplatesRoutes';
import ourStoryRoutes from './OurStoryRoutes';
import customerSupportRoutes from './CustomerSupportRoutes';
import retrospectSettingsRoutes from './RetrospectSettingsRoutes';

const routes: RouteObject[] = [
  ...homeRoutes,
  ...mainServiceRoutes,
  ...reHubTemplateRoutes,
  ...ourStoryRoutes,
  ...customerSupportRoutes,
  ...retrospectSettingsRoutes
];

export default routes;
