import express from "express";
import router from './router';

const app = express();

app.use('/',router);

app.get('/status', (req, res) => {
    res.send({
        app: 'ntask-api',
        status: "ok",
        date: new Date()
    })
});

export default app;