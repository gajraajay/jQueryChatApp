requirejs.config({
    baseUrl: "/cometchat-js-poc/bower_components/",
    paths: {
        jQuery: "jquery/dist/jquery.min",
        CometChat: "../node_modules/@cometchat-pro/chat/CometChat",
        CCi18n:'../js/i18n',
        ccRoutes:'../js/routes',
        i18n: "jquery.i18n/src/jquery.i18n",
        messagestore:'jquery.i18n/src/jquery.i18n.messagestore',
        fallbacks:'jquery.i18n/src/jquery.i18n.fallbacks',
        parser:'jquery.i18n/src/jquery.i18n.parser',
        emitter:'jquery.i18n/src/jquery.i18n.emitter',
        language:'jquery.i18n/src/jquery.i18n.language',
        router:'jq-router/dist/jq-router.min'
        
    },
    shim: {
        router:{
            deps:['bower_components/jquery/dist/jquery.min.js']
        },
        messagestore:{
            deps:['bower_components/jquery.i18n/src/jquery.i18n.js']
        },
        fallbacks:{
            deps:['bower_components/jquery.i18n/src/jquery.i18n.js']
        },
        parser:{
            deps:['bower_components/jquery.i18n/src/jquery.i18n.js']
        },emitter:{
            deps:['bower_components/jquery.i18n/src/jquery.i18n.js']
        },language:{
            deps:['bower_components/jquery.i18n/src/jquery.i18n.js']
        },
        // 'jquery.i18n': {
        //     deps: [
        //     'bower_components/jquery.i18n/src/jquery.i18n.js',
        //         'bower_components/jquery.i18n/src/jquery.i18n.messagestore.js',
        //         // 'bower_components/jquery.i18n/src/jquery.i18n.fallbacks.js',
        //         // 'bower_components/jquery.i18n/src/jquery.i18n.parser.js',
        //         // 'bower_components/jquery.i18n/src/jquery.i18n.emitter.js',
        //         // 'bower_components/jquery.i18n/src/jquery.i18n.language.js',
        //     ]
        // }
    }
})
