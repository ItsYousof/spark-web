const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const port = PORT;
const cors = require('cors');
require('dotenv').config();
let possible_logins = [
    { username: 'Sparkuser', password: 'host' },
    { username: 'Ransh', password: 'slow69' },
    { username: 'Nalla', password: 'biggy' },
    { username: 'Jet', password: 'fnaf' },
    { username: 'Spark', password: 'admin' }
];
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/games', (req, res) => {
    res.sendFile(__dirname + '/static/games.html');
});

app.get('/apps', (req, res) => {
    res.sendFile(__dirname + '/static/apps.html');
});

app.get('/settings', (req, res) => {
    res.sendFile(__dirname + '/static/settings.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

app.get('/loader', (req, res) => {
    res.sendFile(__dirname + '/static/loader.html');
});

app.get('/locker', (req, res) => {
    res.sendFile(__dirname + '/static/profile.html');
});

app.post('/proccess_login', (req, res) => {
    const { username, password } = req.body;
    
    const user = possible_logins.find((user) => user.username === username && user.password === password);

    if (user) {
        res.json({ status: 'success',
            username: user.username,
            password: user.password,
        });
    } else {
        res.json({ status: 'failure' });
    }
});

// Enabling this will cause the games to not function
//  app.get('/404', (req, res) => {
//      res.sendFile(__dirname + '/static/404.html');
//  });

//  app.get('/*', (req, res) => {
//     res.redirect('/404');
//  })

app.get('/worker', async (req, res) => {
    try {
        const url = req.query.url;
        if (!url) {
          return res.status(400).json({ error: 'URL parameter is missing' });
        }
    
        // Fetch content from the specified URL
        const response = await axios.get(url);
        res.send(response.data);
      } catch (error) {
        console.error('Error fetching content:', error.message);
        res.status(500).json({ error: 'Failed to fetch content' });
      }
});

app.get('loader', (req, res) => {
    res.sendFile(__dirname + '/static/loader.html');
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})