const express = require('express');
const bodyparser=require('body-parser'); 
const CityRepository=require('./repository/city-repository');
const setupandStartServer = async () => {
    const app = express();
    const {PORT}=require('./config/serverConfig')
    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        const repo=new CityRepository(); 
    });
   

};

setupandStartServer();