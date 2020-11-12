var express = require('express');

const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


if(process.env.NODE_ENV){
  require('dotenv').config({  
    path: process.env.NODE_ENV === "local" ? ".env.local" : ".env"
  })
}

// if(process.env.NODE_ENV){
//   require('dotenv').config({  
//     path: ".env"
//   })
// }


app.use(cors());
app.use(express.json());

app.use(routes);

//notFound
app.use((req, res, next) => {
  const error = new Error('Página não encontrada');
  error.status = 404;
  next(error);
});

//catch all errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});


app.listen(PORT, (err) => {
  if(err) console.log('Erro no servidor:' + err );
  else console.log('Servidor executando na porta: ' + PORT);
});
