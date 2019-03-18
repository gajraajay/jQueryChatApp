
requirejs(['js/CometChat.js'], function (CometChat) {
    var reciverType = CometChat.RECEIVER_TYPE.USER,
        messageType = CometChat.MESSAGE_TYPE.TEXT, id;
    if (CometChat.isInitialized()) {
        $.router.onViewChange(function (e, viewRoute, route, params) {
            // console.log({ e, viewRoute, route, params });

            if (params["type"] == 'user' && params['id']) {
                console.log("yes we have both");
                reciverType = CometChat.RECEIVER_TYPE.USER;
                messageType = CometChat.MESSAGE_TYPE.TEXT;
                id = params['id'];
                
                $('#messageInput').on('keyup', function (e) {
                    // console.log("event",e);
                    let text = $(this).html().trim()
                        .replace(/<br\s*\/*>/ig, '\n')
                        .replace(/(<(p|div))/ig, '\n$1')
                        .replace(/(<([^>]+)>)/ig, "");
                    if (e.keyCode == 13) {                        
                        if(!e.shiftKey){                         
                            e.preventDefault();
                            e.stopPropagation();   
                            sendMessage(reciverType, id, text.trim(), messageType);
                            $('#messageInput').text('');
                        }
                    }


                });
            } else {
                // console.log('we need to redirect')
                $.router.go('home.contact');
            }
        });
    } else {

    }


    function sendMessage(type, id, messageText, messageType) {
        var receiverID = id;

        var messageType = CometChat.MESSAGE_TYPE.TEXT;
        var receiverType = type;

        var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

        CometChat.sendMessage(textMessage).then(
            message => {
                console.log("Message sent successfully:", message);
                // Text Message Sent Successfully
                
            },
            error => {
                console.log("Message sending failed with error:", error);
            }
        );
    }

})