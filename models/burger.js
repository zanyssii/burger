var obrm = require("../config/obrm.js");

var burger = {
    selectAll: function(cb) {
        obrm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function( vals, cols, cb) {
        obrm.insertOne("burgers", vals, cols, function(res) {
            cb(res);
        });
    },
    updateOne: function(objValsCol, condition, cb) {
        obrm.updateOne("burgers", objValsCol, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;