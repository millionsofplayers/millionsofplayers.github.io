document.getElementById('send').onclick = function() {
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/1087459031167279204/xmvEFspDJEReU0iVs8_RCREnkPQH73S6Csy9JOnjEHtWxHfX5VqtdpCHob58xxMYZzM2");
    request.setRequestHeader('Content-type', 'application/json');
var params = {
    username: "Question"+new Date().getTime(), // you can make this whatever you want
    content: document.getElementById("question").value
}
request.send(JSON.stringify(params));

// below gives your user some helpful feedback letting them know their message has been sent
alert('Thanks, your message has been sent.');
// below clears the form fields after submission
document.getElementById("question").value = '';
                        }