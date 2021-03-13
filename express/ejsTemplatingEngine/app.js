const express = require('express');
const app = express();
app.set('view engine', 'ejs');
// routed middleWare to use external css from assets folder
app.use("/assets", express.static('assets'));

app.get('/profile/:name', function (req, res) {

    data = { email: "test@gmail.com", address: "Ranchi", skills: ['javascript', 'java', 'php', 'Laravel', 'ejs', 'CodeIgniter', 'java', 'advance java'] }
    console.warn(req.params.name);
    res.render('profile', { name: req.params.name, data: data })
})

app.get('/skills', function (req, res) {
    data = { email: "test@gmail.com", address: "Ranchi", skills: ['javascript', 'java', 'php', 'Laravel', 'ejs', 'CodeIgniter', 'java', 'advance java', 'spring boot'] }
    res.render('skills', { data: data })
})

app.get('/contact', function (req, res) {
    res.render('contact')
});
app.get('/', function (req, res) {
    res.render('home')
});
app.get('/services', (req, res) => res.render('services'));
app.get('/login', (req, res) => {
    console.warn(req.query);
    res.render('login');
});

app.listen(4600);
