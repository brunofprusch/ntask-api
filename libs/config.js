module.exports = {
    database: "ntaskapi",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntaskapi.sqlite",
        define: {
            nderscored: true
        }
    },
    jwtSecret: "Nta$K-AP1",
    jwtSession: {session: false}
};