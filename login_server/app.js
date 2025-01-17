const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = {
    "username":"vamsee9201",
    "password":"vamsee"
};

app.post('/login', (req, res) => {
    const {username,password} = req.body;
    //console.log(body);
    if (users["username"] == username && users["password"] == password) {
        res.status(200).json({
            success: true,
            message: 'Successfully logged in!',
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid username or password',
        });
    }
    
    
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})