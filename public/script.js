const messageContainer = document.getElementsByClassName("messages")[0];
const input = document.getElementById("input");
const button = document.getElementById("button")

var socket = io();

input.value = ""; // erase everything from the input when page loads

document.onkeydown = function() {
    if(window.event.keyCode=='13'){ // when user press enter
        sendMessage();
    }
}

function sendMessage() {
    if(input.value.trim() == "") return; // remove spaces at the beginning and end to check if the message is empty

    var outgoingMessageNode = document.createElement("P");
    outgoingMessageNode.innerHTML = input.value.trim();

    outgoingMessageNode.classList.add("client-message");
    messageContainer.appendChild(outgoingMessageNode);

    socket.emit('message', input.value);
    input.value = "";
}

// executed when a message is emited
    socket.on('message', function(msg) {
        let incomingMessage = document.createElement('p');
        incomingMessage.innerHTML = msg;
        incomingMessage.classList.add("incoming-message")
        messageContainer.appendChild(incomingMessage);
});