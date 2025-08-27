const socket = io(); // todo setup serverside
const messageIn = document.getElementById("msg input");
const messages = document.getElementById("messages");

class user {
    Name;
    SendMessage() {
        if (messageIn.value.trim()) {
            socket.emit(messageIn.value.trim())
            messageIn = '';
        }
    }
}

