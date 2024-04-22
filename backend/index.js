import express from 'express';
const app = express()

app.get('/', function (req, res) {
  res.send('ISMAEL LA MAQUINA')
})

app.listen(3000);
console.log("Server running at http://localhost:3000/");