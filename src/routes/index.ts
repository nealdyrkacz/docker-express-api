import { ServerRoutes } from './serverRoutes';
import { IdentityRoutes } from './IdentityRoutes';
import { Route } from './route';

export function configureRoutes(): Route[] {
  const routes: Route[] = [];

  routes.push({ route: new ServerRoutes() });
  routes.push({ route: new IdentityRoutes() });

  return routes;
}
