import { AuthService } from 'aurelia-authentication';
import { inject, computedFrom } from 'aurelia-framework';

@inject(AuthService)
export class Login {
    authService: AuthService;
    username: string = '';
    password: string = '';

    @computedFrom('authService.authenticated')
    get authenticated() {
        return this.authService.authenticated;
    }

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    login() {
        return this.authService.login({
                username: this.username,
                password: this.password,
                grant_type: "password"
            },
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(response => {
                console.log(response);
            });
    }

    authenticate() {
        return this.authService.authenticate('identity-server')
            .then(response => {
                console.log("auth response " + response);
            });
    }
}