import { KeycloakConfig } from 'keycloak-angular';

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'admin-dashboard',
  clientId: 'admin-dashboard'
};

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
