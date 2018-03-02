function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    url = "https://api.github.com/users/" + user ;
    
    xhttp.open('GET', url, false);
    xhttp.send();
    return xhttp;
}

function showUser(user) {
    // var json = xhrReq.responseText;
    // var myObject = JSON.parse(json);
    // vmanvitha3
    // 2. set the contents of the h2
    $('h2').text("User Name:" + user.name)
    // the two div elements in the div '#profile' with the user content
var imagTag = '<img src="' + user.avatar_url + '">';
    $('.avatar').append(imagTag);
    var urlTextTag 
    $('.urlText').text(url);
    $('.information').text("User Link:" + user.url);


}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $('h2').text("No user name with this ID" )

}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
