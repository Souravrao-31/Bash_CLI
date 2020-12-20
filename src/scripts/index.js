const { exec } = require('child_process');

export const execute = () => {
    const _shell_script_handler = exec('sh main.sh');
    _shell_script_handler.stdout.on('data', (data) => {
        console.log(data);
        process.exit(0);
    });

    _shell_script_handler.stderr.on('data', (data) => {
        console.error(data);
        process.exit(0);
    });
}