import { ServerRoutes } from './serverRoutes';
import { IdentityRoutes } from './IdentityRoutes';
export interface Route {
  route: ServerRoutes | IdentityRoutes;
}
