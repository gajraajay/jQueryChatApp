// require(['node_modules/@cometchat-pro/chat/CometChat'],function(CometChat){
//     console.log("helloworld",CometChat);
// });

require(['config'],function(jQuery){
    require(['../js/home'],function(home){
        console.log("af");
    })
    require(['jQuery','CometChat'],function(jQuery,CometChat){
        console.log(jQuery,CometChat);
    })
})