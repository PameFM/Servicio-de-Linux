// Cambios de prueba para update del servicio
// Prueba #2 del funcionamiento del servicio 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Funcionó')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
