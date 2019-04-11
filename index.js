//const tf = require('@tensorflow/tfjs')
// Load the binding (CPU computation)
const tf = require('@tensorflow/tfjs-node')
const express = require('express')
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('index', {
        firstname: 'Yoram'
    });
})

app.listen(3000, () => {
    console.log('running');
})

