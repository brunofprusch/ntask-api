module.exports = app => {
    return {
        findAll: (param, callback) => {
            return callback([
                {title: "Fazer o almoço"},
                {title: "Estudar Node.js"}
            ]);
        }
    }
}