function cmdexec(event) {
    if (event.key == "Enter") {
        cmd = terminal.read()
            .replace(/^[ ]+/g, '');
        terminal.clearinput();
        terminal.write(` ${cmd}
`);
        cmdname = cmd.split(' ')[0];
        cmdargs = cmd.slice(cmdname.length+1);
        if (window.commands[cmdname] === undefined) {
            terminal.write(`Command "${cmdname}" not found
`);
        } else if (cmd != '') {
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
    terminal.setplaceholder('type help for list of commands');
    terminal.write(terminal.prompt);
}
window.onload = init;