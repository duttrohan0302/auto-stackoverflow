const express = require('express')
const { spawn } = require('child_process')
const app = express()
const path=require("path");
const ejs=require("ejs");
const multer = require('multer')
const upload = multer({
  dest: 'data',
  limits: {
    fileSize: 1000000,
  },
  
  fileFilter(req, file, cb) {
  
  if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
    cb(new Error('Please upload an image.'))
  }
    cb(undefined, true)
  }
})
  
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname,'public')));

app.post('/upload', upload.single('upload'), (req, res) => {
  if(req.file){

    console.log("File name",req.file.filename)
    const python = spawn('python', ['creator.py',`data/`+req.file.filename,'data/Trees/','100','100','public/Mosaic.jpeg'])

    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...')
      console.log(data.toString())
    })
    python.stdout.on('close', function (code) {
        console.log('Closed with code ',code)
        res.render('pages/image',{data: "Mosaic.jpeg"});
      })
    

    
  }else{
    res.status(400).json({msg:"Img Not Received"})
  }
})


app.get('/mosaic',(req,res)=>{
  console.log("Mosaic Route")
  res.render('pages/mosaic');
})

app.get('/age-gender',(req,res)=>{
  console.log("Age-Gender Route")
  res.render('pages/gad');
})

app.post('/upload-age-gender', upload.single('upload'), (req, res) => {
  if(req.file){

    console.log("File name",req.file.filename)
    const python = spawn('python', ['gad.py',`data/`+req.file.filename])

    python.stdout.on('data', function (data) {
      try{
        console.log('Pipe data from python script ...')
        console.log(data.toString())
      }catch(dataError){
        console.log("DATA ERROR:",dataError)
      }
    })
    python.stdout.on('close', function (code) {
      try{
        console.log('Closed with code ',code)
        res.render('pages/gadImage',{data: "Person.jpeg"});
      }catch(closeError){
        console.log("CLOSE ERROR:",closeError)
      }
    })
    

    
  }else{
    res.status(400).json({msg:"Img Not Received"})
  }
})


app.get('/',(req,res)=>{
  console.log("Home Route")
  res.render('pages/index');
})

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
