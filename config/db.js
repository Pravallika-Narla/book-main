const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://pravallika:%4013Feb2003@cluster0.vuzp3oc.mongodb.net/book-store');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})