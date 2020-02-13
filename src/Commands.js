window.commands = {
    "help": function (args) {
        window.terminal.write(`Help:
help                     | Display this help
project [command] [args] | Download and list projects
echo [string]            | Type string
prompt [prompt]          | Set new prompt
`);
    },
    "project": function (args) {
        window.terminal.write('Not supported\n');
    },
    "echo": function (args) {
        window.terminal.write(args + '\n')
    },
    "prompt": function (args) {
        window.terminal.prompt = args;
    },
}