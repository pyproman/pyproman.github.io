/* Terminal API */
window.terminal = {
    write: function (text) {
        document.getElementById("termtext").innerText += text;
    },
    read: function () {
        return document.getElementById("terminput").value;
    },
    clearinput: function () {
        document.getElementById("terminput").value = '';
    },
    inputlock: function (lock) {
        document.getElementById("terminput").disabled = lock;
    },
    setplaceholder: function (text) {
        document.getElementById("terminput").placeholder = text;
    },
    focus: function () {
        document.getElementById("terminput").focus();
    },
    prompt: "js@localhost $ ",
};