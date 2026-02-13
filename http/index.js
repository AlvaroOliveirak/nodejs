express = require('express');


const app = express();


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/sobre', (req,res) => {
    res.send('Sobre');
    })

    app.get('/ola/:nome/:cargo',(req,res) =>{
        res.send("<h1> ola " + req.params.nome +"</h1>"
        + "<h2> seu cargo é: " + req.params.cargo + "</h2>"
        );
    })





app.listen(3000);