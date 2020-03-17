/* Terminal API */
window.terminal = {
    write: function (text) {
        document.getElementById("termtext").innerText += text; // Append text to terminal
    },
    read: function () {
        return document.getElementById("terminput").value; // Read from the terminal
    },
    clearinput: function () {
        document.getElementById("terminput").value = ''; // Clear input
    },
    inputlock: function (lock) {
        document.getElementById("terminput").disabled = lock; // Lock input
    },
    setplaceholder: function (text) {
        document.getElementById("terminput").placeholder = text; // Set placeholder
    },
    focus: function () {
        document.getElementById("terminput").focus(); // Focus input
    },
    prompt: "js@localhost $", // Prompt
};