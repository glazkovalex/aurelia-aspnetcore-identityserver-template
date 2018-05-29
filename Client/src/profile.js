import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';

@inject(AuthService)
export class Profile {
  authService;
  name;
  website;

  constructor(authService) {
    this.authService = authService;
  }

  attached() {
    this.authService.getMe()
      .then(response => {
        this.name = response.name;
        this.website = response.website;
      });
    console.log(this.authService.client);
    console.log(this.authService.authentication);
    console.log(this.authService.config);
  };
}
