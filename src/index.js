var express = require('express');

const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 3333;


// if(process.env.NODE_ENV){
//   require('dotenv').config({  
//     path: process.env.NODE_ENV === "local" ? ".env.local" : ".env"
//   })
// }

if(process.env.NODE_ENV){
  require('dotenv').config({  
    path: ".env"
  })
}


app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(process.env.PORT || port, (err) => {
  if(err) console.log('Erro no servidor:' + err );
  else console.log('Servidor executando na porta:' + port);
});