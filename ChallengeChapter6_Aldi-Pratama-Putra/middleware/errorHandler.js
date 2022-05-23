const { User_game, User_game_biodata } = require ("../models")

module.exports = function errorHandler (err, req, res, next) {
    if (err == 400) {
        console.log("Bad request from client");
    } else {
        console.log("Internal Server Error");
    }
}