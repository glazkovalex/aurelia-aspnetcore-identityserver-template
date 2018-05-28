import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

import { AuthenticateStep } from 'aurelia-authentication';

export class App {
    router: Router | undefined;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'aureliaCoreIdentity4';

        config.addPipelineStep('authorize', AuthenticateStep);

        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
            nav: true,
            title: 'Fetch data',
            auth: true
        }]);

        this.router = router;
    }
}
