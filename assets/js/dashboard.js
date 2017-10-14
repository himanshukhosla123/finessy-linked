$(document).ready(function(){
    $(".box-tools button").click(function(){
        var choice=$(this).data("widget");
        switch(choice){
            case "collapse":$(".direct-chat .box-body ,.direct-chat .box-footer ,.direct-chat .sort-by").slideToggle();
                            break;
            case "chat-pane-toggle":$(".direct-chat").toggleClass("direct-chat-contacts-open");
                                    break;
            case "remove":$(".direct-chat").hide();
                          break;
        }
    });
    
});