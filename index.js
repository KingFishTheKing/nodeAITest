//const tf = require('@tensorflow/tfjs')
// Load the binding (CPU computation)
const tf = require('@tensorflow/tfjs-node')
const express = require('express')
const app = express();
app.locals.title = 'My test ai';
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index');
})

app.listen(3000, () => {
    console.log('running');
})

