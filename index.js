// npm i express express-ejs-layouts
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require("method-override")
const app = express()

// MIDDLEWARE 

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use((req,res,next)=>{
    console.log("Our own mmiddleware!")
    console.log(`Request for ${req.method} at ${req.path} `)
    next()
})

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use('/dinosaurs', require('./controllers/dinosaurs'))

// ROUTES
app.get('/', (req,res) => {
    res.redirect('/dinosaurs')
})

app.listen(3500, () => {
    console.log('App listening on port 3500!')
})