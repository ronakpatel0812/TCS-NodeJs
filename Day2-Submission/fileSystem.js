//import fileSystem module:
const fs = require('fs');

const yargs = require('yargs');

let fileName = yargs.argv._[0];


fs.readFile('FileName.txt', function(err, data) {
    if(err) throw err;
    if(data.includes(fileName)){
        console.log('File already exists.');
    } else {
        if(fileName != null){
            let file = fs.createWriteStream(fileName);
            fs.appendFile('FileName.txt',`\n${fileName}`, function(err, data) {
                if(err) throw err;
                console.log('File Name appended successfully.');
            });
            file.write("You are awesome!");
            file.end();
            console.log('File created successfully!');
        } else {
            console.log('Please Enter a File Name.');
        }
    }  
})




