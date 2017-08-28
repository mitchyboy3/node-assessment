const   express = require('express'),
        bodyParser = require('body-parser'),

        config = require('./config'),
        usersCtrl = require('./usersCtrl');

const app = module.exports = express();
const port = config.port || 3000;

app.use(bodyParser.json());

app.get('/api/users', usersCtrl.getUsers);
app.get('/api/users/:id', usersCtrl.getUser);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonAdmins);
app.get('/api/user_type/:type', usersCtrl.getUserByType);

app.put('/api/users/:id', usersCtrl.updtateUser);
app.post('/api/users', usersCtrl.createUser);

app.delete('/api/users/:id', usersCtrl.deleteUser);



app.listen(port, console.log(`Listening on port ${port}.`))
