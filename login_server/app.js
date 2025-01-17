const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8080
const cors = require("cors");

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors({ origin: "http://localhost:3000" })); // Allow requests from frontend origin
app.use(express.json()); // Parse JSON bodies

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = {
    "email":"vamsee9201@gmail.com",
    "password":"vamsee"
};

app.post('/login', (req, res) => {
    const {email,password} = req.body;
    //console.log(body);
    if (users["email"] == email && users["password"] == password) {
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