require('dotenv').config();

const express  = require('express');
const path     = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola Mundo — Lab17BDSupabase');
});

const gameRoutes = require('./routes/game.routes.js');
app.use('/games', gameRoutes);



app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});