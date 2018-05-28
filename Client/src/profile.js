import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';

@inject(AuthService)
export class Profile {
  authService;

  constructor(authService) {
    this.authService = authService;
  }

  getMe() {
    return this.authService.getMe()
      .then(response => console.log(response));
  };

  authenticate() {
    return this.authService.authenticate('identityServer', '')
      .then((response) => {
        console.log(response);
        //console.log(isAuthenticated());
      });
  }
}
