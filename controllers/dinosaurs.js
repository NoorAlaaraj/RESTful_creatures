const { Router } = require('express')
const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req,res) => {
    let dinosaurs = fs.readFileSync("./dinosaurs.json")
    let dinoData = JSON.parse(dinosaurs);
    // console.log(dinoData)
    res.render('dinosaurs/index.ejs', {myDinos: dinoData})
})


router.get('/new', (req,res) => {
    res.render('dinosaurs/new')
})

router.get('/:idx', (req,res) => {
    // get dinosaurs
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs);
    console.log('This is the req.params object! ', req.params)
    let dinoIndex = parseInt(req.params.idx)
    res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]})
})


router.post('/', (req, res)=> {
    console.log('This is the Request Body: ', req.body)
    res.redirect('/dinosaurs')

    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

    dinoData.push(req.body)

    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    JSON.stringify(dinoData)

    res.redirect('/dinosaurs')
})
 router.delete("/:idx", (req,res) => {
    console.log("This is my Req Params object" , req.params)
    
        let dinosaurs = fs.readFileSync('./dinosaurs.json')

        let dinoData = JSON.parse(dinosaurs)
      
        // remove the deleted dinosaur from the dinosaurs array
        dinoData.splice(req.params.idx, 1)
      
        // save the new dinosaurs to the data.json file
        fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
      
    
    
    res.redirect("/dinosaurs")
 })


 router.get("/edit/:idx" , (req,res)=>{
    // grab dino data 
    let dinosaurs = fs.readFileSync("./dinosaurs.json")
    let dinoData = JSON.parse(dinosaurs)

    // display edit page

    res.render("dinosaurs/edit" , {dino: dinoData(req.params.idx), 
    
        dino: dinoData[req.params.idx],
        dinoTd: req.params.idx
    })
 })

 router.put("/:dinoId" , (req,res)=> {
    let dinosaurs = fs.readFileSync("./dinosaurs.json")
    let dinoData = JSON.parse(dinosaurs)

    //re-assign the name and type fields of the dinosaur to be editted
    dinoData[req.params.idx].name = req.body.name;
    dinoData[req.params.idx].type = req.body.type;

   // save the editted dinosaurs to the data.json file
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    res.redirect('/dinosaurs');
})


module.exports = router;






