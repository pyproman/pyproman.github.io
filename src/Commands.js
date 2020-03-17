window.commands = {
    "help": function (args) {
        terminal.write(`Help:
help                     | Display this help
project [command] [args] | Util for GitHub repositories (clone/readme/etc...)
echo [string]            | Type string
prompt [prompt]          | Set new prompt
`);
    },
    "project": function (args) {
        arguments = args.split(' ')
        if (args == '') {
            terminal.write(`Help:
project [command] [args]
COMMAND is command:
    clone username/repository
    issues username/repository
    open username/repository id
    pulls username/repository
    wiki username/repository
    readme username/repository
    commits username/reposirroy
    releases username/repository
`);
return 0;
        }
        command = arguments[0]
        if (command == 'clone' && arguments.length == 2) {
            rep = arguments[1]
            window.open(`https://github.com/${rep}/archive/master.zip`, '_blank')
        } else if (command == 'readme' && arguments.length == 2){
            rep = arguments[1]
            window.open(`https://github.com/${rep}/blob/master/readme.md`, '_blank')
        } else if (command == 'open' && arguments.length == 3) {
            rep = arguments[1]
            id = arguments[2]
            window.open(`https://github.com/${rep}/issues/${id}`) // GitHub issues ID and pull requests ID are combined, so here I dont need API.
        } else if (['issues', 'pulls', 'wiki', 'commits', 'releases'].indexOf(command) !== -1 && arguments.length == 2) {
            rep = arguments[1]
            window.open(`https://github.com/${rep}/${command}`, '_blank')
        } else {
            terminal.write(`Incorrect syntax.
Help:
project [command] [args]
COMMAND is command:
    clone username/repository
    issues username/repository
    open username/repository id
    pulls username/repository
    wiki username/repository
    readme username/repository
    commits username/repository
    releases username/repository
`)
        }
    },
    "echo": function (args) {
        terminal.write(args + '\n')
    },
    "prompt": function (args) {
        terminal.prompt = args;
    },
}