let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;
let app = express();

app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(session({
    secret: 'ThisIsASecret',
    resave: false,
    saveUninitialized: true
}))

let server = app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (req, res) => {
    res.render('index')
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
    console.log('socket connection!!');
    console.log(`socket id: ${socket.id}`);
    socket.on('button_clicked', (data) => {
        io.emit('button_response', { msg: 'Somebody clicked a button'})
    })
})