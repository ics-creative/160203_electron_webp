System.register(['angular2/platform/browser', './component.app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, component_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(component_app_1.AppComponent);
        }
    }
});
