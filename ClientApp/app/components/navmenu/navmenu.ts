import { AuthService } from 'aurelia-authentication';
import { inject, computedFrom } from 'aurelia-framework';

@inject(AuthService)
export class Navmenu {
    authService: AuthService;

    @computedFrom('authService.authenticated')
    get authenticated() {
        return this.authService.authenticated;
    }

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    authenticate() {
        return this.authService.authenticate('identityServer')
            .then(response => {
                console.log("auth response " + response);
            });
    }
}