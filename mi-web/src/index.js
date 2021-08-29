const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 4000);

// Middlewares

// Routes
app.get('/', (req, res) => {
    app.set(path.join(__dirname, 'views/index.html'));
    console.log(path.join(__dirname, 'views/index.html'));
});
// Static Files

// Escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});