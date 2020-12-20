const fs = require('fs');
const shell = require('shelljs');
const file_name = 'change.txt';

//  ! [LOGIC]
//  1. executing the git command and adding file nanmes to change.txt,
//  2. fetchin the custom update message
//  3. git push command with user name and password!

export const my_custom_git_push = async(args) => {
    const cmd_changed_file = `echo | git ls-files --other --exclude-standard > ${file_name}`;
    await shell.exec(cmd_changed_file);
    console.log(format_commit_message(fs.readFileSync(file_name).toString()));
    process.exit(0);
};

const format_commit_message = (message) => {
    if (!message) throw new Error('Invalid Message');
    var values = message.split('\n');
    if (!values || !values.length) return "No files updated";
    // removing the " " which is default last element in vaules array!!
    values.length = values.length - 1;
    return `[UPDATE] - ${values.join(", ").toString()}`;
};