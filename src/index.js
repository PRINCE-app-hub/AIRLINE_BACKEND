const express = require('express');
const setupandStartServer = async () => {
    const app = express();
    const {PORT}=require('./config/serverConfig')

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};

setupandStartServer();