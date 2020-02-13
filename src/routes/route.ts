import { ServerRoutes } from './serverRoutes';
import { IdentityRoutes } from './IdentityRoutes';
import { AuthRoutes } from './AuthRoutes';
export interface Route {
  route: ServerRoutes | IdentityRoutes | AuthRoutes;
}
