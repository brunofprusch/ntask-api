module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        app.dao.db.sequelize.sync().done(() => {
            app.listen(app.get("port"), () => {
                console.log(`NTask API - porta ${app.get("port")}`);
            });
        });
    }
}