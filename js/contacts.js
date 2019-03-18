requirejs(['js/CometChat.js', 'js/user.js'], function (CometChat) {
    let isFatching = false,
        limit = 50,
        usersRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();
    if (CometChat.isInitialized()) {
        CometChat.getLoggedinUser().then(user => {
            user = new CometChat.User(user);
            if (!user.getAvatar()) {
                user.setAvatar("https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png");
            }
            $("#myDetails").append("<div class='card'><div class='row card-body'>" +
                "<div class='col-3'><div class='profileThumbImage' style='background-image: url(" + user.getAvatar() + ");'></div></div>" +
                "<div class='col-9'>" +
                "<div class='name'><p class='h4'>" + user.getName() + "</p></div>" +
                "<div class='uid'><p class='h6'>" + user.getUid() + "</p></div>" +
                "</div>" +
                "</div></div>");
        }, error => {
            //TODO redirect;
        });

        $(document).ready(function () {
            console.log("I am getting Attacched");
            $("#contactList").scroll(function () {
                console.log("asfa");
                if (!isFatching && (parseInt($("#contactList")[0].scrollHeight - $("#contactList").scrollTop()) < (parseInt($(this).outerHeight()) + 500))) {
                    isFatching = true;
                    getUserList(usersRequest);
                }
            });
            $('#contactList').on('click', 'li', function () {
                console.log($(this).attr('id'), "getting Clicked");
                $.router.go('home.contact.id',{type:'user',id:$(this).attr('id')});
            });
        });

        getUserList(usersRequest);
    } else {
        $.router.go('login');
    }


    function getUserList(usersRequest) {
        usersRequest.fetchNext().then(users => {
            users.map(user => {
                if (!user.getAvatar()) {
                    user.setAvatar("https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png");
                }
                $("#contactList").append("<li class='list-group-item contactItem' id='" + user.getUid() + "'>" +
                    "<div class='row'>" +
                    "<div class='col-3'><div class='contactThumbImage' style='background-image: url(" + user.getAvatar() + ");'></div></div>" +
                    "<div class='col-9'>" +
                    "<div class='name'><p class='lead'>" + user.getName() + "</p></div>" +
                    "<div class='uid'><p class='h6'>" + user.getUid() + "</p></div>" +
                    "</div>" +
                    "</div>" +
                    "</li>");
                isFatching = false;
            });

        }, error => {
            console.log({ error });
            isFatching = false;
        });
    }
});
