requirejs(['js/CometChat.js'], function (CometChat) {
    if(CometChat.isInitialized()){
        $.router.go('home.contact');        
    }else{

    }
    
})