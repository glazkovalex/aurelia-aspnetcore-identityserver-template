import { PLATFORM, inject, computedFrom } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { AuthService, AuthenticateStep, AuthorizeStep } from 'aurelia-authentication';

@inject(AuthService)
export class App {
  authService;

  constructor(authService) {
    this.authService = authService;
  };

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.root = '/';
    //config.addPipelineStep('authorize', AuthenticateStep);
    config.map([
      { 
        route: ['', 'home'], 
        name: 'home', 
        moduleId: PLATFORM.moduleName('./home'),
        nav: true,
        title: 'Home'
      },
      {
        route: 'profile',
        name: 'profile',
        moduleId: PLATFORM.moduleName('./profile'),
        nav: true,
        title: 'Profile',
        auth: true
      }
    ]);
    this.router = router;
  }

  @computedFrom('authService.authenticated')
  get authenticated() {
    return this.authService.authenticated;
  }

  authenticate() {
    return this.authService.authenticate('identityServer', '')
      .then((response) => {
        console.log(response);
      });
  }

  logout() {
    return this.authService.logout()
      .then(response => {
        console.log(response);
      });
  }

  attached() {
    console.log(PLATFORM);
    // this.eventAggregator.subscribe('authentication-change', authenticated => {
    //   console.log("EVENT: " + authenticated);
    // });
  }
}
