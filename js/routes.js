define(['router'], function (router) {
    var routes = {},
        defaultRoute = 'login';
    routes['login'] = {
        url: '#/login',
        templateUrl: 'html/login.html'
    };
    routes['home'] = {
        url: '#/home',
        templateUrl:'html/home.html'
    };
    routes['home.contact'] = {
        url: '/contact',
        templateUrl: 'html/contacts.html'
    };
    routes['home.contact.id'] = {
        url: '/:type/:id',
        templateUrl: 'html/user.html'
    };
$.router.setData(routes);
    return $.router;
})