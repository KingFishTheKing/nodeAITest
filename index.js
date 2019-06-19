//const tf = require('@tensorflow/tfjs')
// Load the binding (CPU computation)
//const tf = require('@tensorflow/tfjs-node');
const express = require('express');
const app = express();
const spawn = require('child_process').spawn;
const fs  = require('fs');
const stream = require('stream');

/*
    Span the child process
*/
const child = spawn(
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', //You probs gonna have to need to change this since this is the path on my pc (double forwards slahes to escape slashes on win system)
    [   
        'http://localhost:3000', //Open up the page this app is also serving
        '--auto-open-devtools-for-tabs', //Open up devtools when tabs open
        '--maximize' //Maximize window
    ],  
    {
        stdio: ['pipe', 'pipe', 'pipe']
    }
); 

//Try to capture anything the aplication does
child.stdout.on('data', (e) => {
    console.log(`Output: ${e}`);
});
child.stdin.on('data', (e) => {
    console.log(`In: ${e}`);
});
child.stderr.on('data', (e) => {
    console.log(`Error: ${e}`)
});
child.on('data', (e) => {
    console.log(`Any sort of data: ${e}`)
});
child.on('exit', (e) => {
    console.log(`Child closed => ${e}`)
});

child.stdin.setEncoding('utf-8');
//Send something in
/*
==>This doesn't work
const file = fs.createReadStream('input.txt', {encoding:'utf8'});
file.pipe(child.stdin);

==> Nor does this
child.stdin.write("console.log('test')\n");
child.stdin.end();

==> Aaaand this doesn't work either
var stdinStream = new stream.Readable();
stdinStream.push('console.log("test")');
stdinStream.push(null)//Signals end of stream
stdinStream.pipe(child.stdin);
*/

/*
    Interface setup
*/
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('index', {
        firstname: 'Yoram'
    });
})
/*
    Interface display
*/
app.listen(3000, () => {
    console.log('running');
});