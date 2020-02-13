function cmdexec(event) {
    if (event.key == "Enter") {
        cmd = terminal.read()
            .replace(/^[ ]+/g, '');
        terminal.clearinput();
        terminal.write(cmd + '\n');
        cmdname = cmd.split(' ')[0];
        cmdargs = cmd.slice(cmdname.length);
        if (cmd == ''){
            // Nothing
        } else if (window.commands[cmdname] === undefined) {
            terminal.write(`Command "${cmdname}" not found\n`);
        } else {
            window.commands[cmdname](cmdargs)
        }
        terminal.write(terminal.prompt);
    } else if (event.key == 'Escape') {
        terminal.clearinput();
        terminal.focus();
        return false;
    }
}
function init() {
    terminal.setplaceholder('type help');
    terminal.write(terminal.prompt);
}
window.onload = init;