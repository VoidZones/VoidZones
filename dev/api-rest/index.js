'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/api/classes', (req, res)=>{
  res.send(200,{classes: []})
})
app.get('/api/classes/:typeClass', (req, res)=>{

    if(req.params.typeClass == "true"){
      console.log(req.params.typeClass)
      res.send(200,{classes:[{"Clase Libre": "Ml 201"}]})
    }else{
      console.log(req.typeClass)
      res.send(200,{classes:[{"Clase llena": "W502"}]})
    }

})



mongoose.connect('mongodb://localhost:27017/voidZones', (err, res)=>{
    if(err){return console.log('error al conectar a la DB')}
    console.log('Conexión establecida a la DB')


    app.listen(port,()=>{
      console.log(`API Rest Sirviendo en localhost:${port}`)
    })

})
