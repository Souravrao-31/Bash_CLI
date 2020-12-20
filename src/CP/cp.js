const colors = require('colors');
const fs = require('fs');
const _name = require('../util').R_Number(10, 100);
const cp_template = require('./template')._competitve_programming_template;
const shell = require('shelljs');
const basic_cpp_template = require('./template').basic_cpp_template;

export const handle_making_file = (args) => {
    let file_name = args[3] ? args[3] : `${_name}.cpp`;
    const re = new RegExp('/*.cpp');
    const data = Array.isArray(file_name.match(re)) ? cp_template : "";
    fs.writeFileSync(file_name, data, (err) => {
        console.log(`${err}`.red);
    });
    console.log(`${file_name} created successfully!`.green);
    process.exit(0);
};

export const run_file = (args) => {
    console.log('Will write this someother day!'.red);
    process.exit(0);
};

export const make_basic_cpp_file = (args) => {
    let file_name = args[3] ? `${args[3]}.cpp` : `${_name}.cpp`;
    const data = basic_cpp_template;
    fs.writeFileSync(file_name, data, (err) => {
        console.log(`${err}`.red);
    });
    console.log(`${file_name} created successfully!`.green);
    process.exit(0);
};

export const run_code = (args) => {
    let exec_command = "cd /home/sachin/Desktop/Practice && code . ";
    if (args[3] == 'c')
        exec_command += "&& google-chrome";
    shell.exec(exec_command, {
        silent: true
    }, (error, stdout, stderr) => {
        if (stdout) console.log(stdout.blue);
        if (stderr) console.log(stderr.red);
        if (error) console.log(`Error Code : + ${error}`.red);
    });
    process.exit(0);
};