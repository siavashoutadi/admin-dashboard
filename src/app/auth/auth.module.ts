import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { keycloakInitializer } from './keycloak-initializer';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    KeycloakAngularModule
  ],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: keycloakInitializer,
      multi: true,
      deps: [KeycloakService]
    },
    AuthGuard
  ]
})
export class AuthModule { }
