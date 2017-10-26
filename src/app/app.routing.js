"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var about_component_1 = require("./components/about.component");
var appRoute = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoute);
//# sourceMappingURL=app.routing.js.map