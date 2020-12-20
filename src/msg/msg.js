const colors = require('colors');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const init = () => {
    console.log(`
_________________________________________________________________________

                    WELCOME TO SOURAV RAO 's CLI!
_________________________________________________________________________
`.blue);
    console.log(`
                              .       .                            
                             / ".   .' "                            
                     .---.  <    > <    >  .---.                    
                     |    \  \ - ~ ~ - /  /    |                    
         _____          ..-~             ~-..-~                     
        |     |   \~~~\.'                    "./~~~/                
       ---------   \__/                        \__/                 
      .'  O    \     /               /       \  "                   
     (_____,    "._.'               |         }  \/~~~/             
      "----.          /       }     |        /    \__/              
            "-.      |       /      |       /      ". ,~~|          
                ~-.__|      /_ - ~ ^|      /- _      "..-'          
                     |     /        |     /     ~-.     "-. _  _  _ 
                     |_____|        |_____|         ~ - . _ _ _ _ _>
    `.grey);

    rl.question("Enter 'Y' for more details - ", function saveInput(name) {
        handle_user_input(name);
        rl.close();
    });
};

const features_supported = [
    "USE GIT                             - Sourav git push -m '{{message}}'",
    "start VS code  & chrome             - Sourav code",
    "run servers                         - Sourav server {{server_name}}",
    "SHUTDOWN PC                         - Sourav shutdown",
    "RESTART                             - Sourav restart",
    "LAUNCH STUDY MODE                   - Sourav study",
    "Making a CP file                    - Sourav cp [name]",
    "Making basic CPP file               - Sourav cpp [name]",
    "Running a CP file                   - Sourav build [name]",
    "Brightness adjustment for PC        - Sourav dim [val]",
    "Toggle the lights of Keyboard       - Sourav light [off]",
];

export const handle_error = (args) => {
    console.log('OOPS! Invalid argument'.red);
    console.log(`Enter 'duhan help' for more details`.green);
    process.exit(0);
}

const handle_user_input = (input) => {
    if (input == 'Y' || input == 'yes' || input == 'y' || input == 'yeah') {
        console.log(`
_________________________________________________________________________

                            OVERVIEW and Commands Supported
_________________________________________________________________________
`.blue);
    }

    // printing features here!
    features_supported.forEach((feature, index) => console.log(`  ${index+1} - ${feature}`.yellow));
    process.exit(0);
}