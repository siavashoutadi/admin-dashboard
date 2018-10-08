import { KeycloakConfig } from 'keycloak-angular';

let keycloakConfig: KeycloakConfig = {
  url: 'http://keycloak.keycloak.192.168.0.25.xip.io/auth',
  realm: 'admin-dashboard',
  clientId: 'admin-dashboard'
};

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
