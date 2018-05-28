export default {
    endpoint: null,
    configureEndpoints: null,
    loginUrl: 'login',
    signupUrl: 'signup',
    profileUrl: 'me',
    unlinkUrl: 'me/unlink',
    loginOnSignup: false,
    storageChangeReload: true,
    expiredRedirect: 1,
    providers: {
        identityServer: {
            name: 'identity-server',
            oauthType: '2.0',
            clientId: 'aurelia',
            redirectUri: 'http://localhost:5002/',
            authorizationEndpoint: 'http://localhost:5000/connect/authorize',
            logoutEndpoint: 'http://localhost:54540/connect/logout',
            postLogoutRedirectUri: 'http://localhost:5002/',
            responseType: 'token id_token',
            scope: ['openid profile api1'],
            requiredUrlParams: ['scope', 'nonce', 'resource'],
            state: function () {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < 32; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            },
            nonce: function () {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < 32; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            },
            popupOptions: { width: 1028, height: 529 },
            resource: 'aurelia-openiddict-resources aurelia-openiddict-server'
        }
    }
};