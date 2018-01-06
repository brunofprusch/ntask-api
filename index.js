import app from './app'
import middlewares from './libs/middlewares.js'

app.listen(middlewares.port, () => {
    console.log(`NTask API - porta ${middlewares.port}`);
});

/*
consign()
    .include("dao/db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app)
*/