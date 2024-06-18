import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes.js';
import authenticate from './routes/authenticate.js';

(async function() {
    dotenv.config();

    const {PORT} = process.env;
    const app = express();
    const server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    app.use('/documents', authenticate, routes);
})()