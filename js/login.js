require(['CometChat', '../js/AppConfig', '../js/constants', 'CCi18n', 'ccRoutes'], function (CometChat, AppConfig, CONTS, CCi18n, ccRoutes) {   
    $.i18n().load().done(function () {
        $('body').i18n();
        CometChat = CometChat.CometChat;
        // console.log(CometChat.isInitialized());
        const Login = {
            checkForEmpty
                : () => {
                    console.log($.i18n('login_error'));
                    $('#invalid-username-alert').html($.i18n('login_error'));
                    if (!$('#userName').val()) {
                        $('#invalid-username-alert').removeClass('invisible').addClass('visible');
                    } else {
                        $('#invalid-username-alert').removeClass('visible').addClass('invisible');
                        CometChat.login($('#userName').val(), AppConfig.apiKey).then(user => {
                            
                            localStorage.setItem(CONTS.LS_KEYS.LOGGEDIN_USER, JSON.stringify(user));
                            localStorage.setItem(CONTS.LS_KEYS.IS_LOGGEDIN, 1);
                                                            
                            $.when($.ready)
                                .then(function () {
                                    console.log($.router);
                                    $.router.go('home');
                                });
                        }, error => {
                            $('#invalid-username-alert').removeClass('invisible').addClass('visible');
                        });
                    }
                },
            onTyping: () => {
                $('#invalid-username-alert').removeClass('visible').addClass('invisible');

            }
        }
        $('#loginBtn').on('click', function () {
            Login.checkForEmpty();
        });
        $('#userName').on('keydown', function () {
            Login.onTyping();
        });
        $('#loginForm').on('submit', function (e) {
            e.preventDefault()
            $("#loginBtn").trigger("click");
        });
    });

});
