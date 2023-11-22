const express = require('express');

const path = require('path');
const multer  = require("multer");

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

//local include multer
const upload = multer({dest:"uploads"});

const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html');

//global include multer
//app.use(multer({dest:"uploads"}).single("filedata"));
app.use(multer({storage:storageConfig}).single("filedata"));

app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.post("/upload", function (req, res, next) {

    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

app.post("/uploadFile", upload.single("filedata"), function (req, res, next) {

    let filedata = req.file;

    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

app.listen(3030, () => {
    console.log('Express is listening on port 3030!')
})