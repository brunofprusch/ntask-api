function findAll(param, callback) {
    return callback([
        {title: "Fazer o almoço"},
        {title: "Estudar Node.js"}
    ]);
}

module.exports = {
    findAll
}