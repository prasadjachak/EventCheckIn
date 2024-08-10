/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { GuestService } from './services/guest.service';
import { MemberService } from './services/member.service';
import { RolesService } from './services/roles.service';
import { SecurityService } from './services/security.service';
import { SecurityUserService } from './services/security-user.service';
import { TicketPassService } from './services/ticket-pass.service';
import { UserService } from './services/user.service';
import { UserRolesService } from './services/user-roles.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AdminService,
    AuthService,
    EventService,
    GuestService,
    MemberService,
    RolesService,
    SecurityService,
    SecurityUserService,
    TicketPassService,
    UserService,
    UserRolesService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
