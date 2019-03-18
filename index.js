require(['config'], function () {
    require(['jQuery', 'ccRoutes', '../js/CometChat', '../js/AppConfig', '../js/constants'], function (jq, ccRoutes, CometChat, AppConfig, CONTS) {
        console.log(AppConfig);
        CometChat.init(AppConfig.appId);
        

        $.router.onRouteBeforeChange(function (e, route, params) {
            console.log("I am getting called ! heloworld", { e, route, params });
            if (localStorage.getItem(CONTS.LS_KEYS.IS_LOGGEDIN)) {
                if (localStorage.getItem(CONTS.LS_KEYS.LOGGEDIN_USER)) {

                    if (route.url === "#/login") {
                        $.router.go('home');
                    }

                }
            } else {
                $.router.go('login');
            }
        });

        $.router.onViewChange(function (e, viewRoute, route, params) {
            console.log("I am getting called ! heloworld", { e, viewRoute, route, params });
        });

        if (localStorage.getItem(CONTS.LS_KEYS.IS_LOGGEDIN)) {

            if (localStorage.getItem(CONTS.LS_KEYS.LOGGEDIN_USER)) {

                let user = new CometChat.User(JSON.parse(localStorage.getItem(CONTS.LS_KEYS.LOGGEDIN_USER)));

                CometChat.login(user.getAuthToken()).then(user => {
                    // $.router.go('home');
                    // $.when($.ready)
                    // .then(function () {
                    // console.log($.router);
                    $.router.run('.mainWrapper', 'home');
                    // });
                }, error => {
                    console.log("Error in login", { error })
                });
            } else {
                localStorage.removeItem(CONTS.LS_KEYS.IS_LOGGEDIN);
            }
        } else {
            console.log(AppConfig);
            $.router.run('.mainWrapper', 'login');

        }

    })
})


