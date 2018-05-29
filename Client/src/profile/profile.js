import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';
import { Config } from 'aurelia-api';

@inject(AuthService, Config)
export class Profile {
  authService;
  apiService;
  name;
  website;

  constructor(authService, config) {
    this.authService = authService;
    this.apiService = config.getEndpoint('protected-api');
  }

  attached() {
    this.authService.getMe()
      .then(response => {
        this.name = response.name;
        this.website = response.website;
      });
    this.apiService.find('/Identity')
      .then(response => {
        this.claims = response;
      })
  };
}
