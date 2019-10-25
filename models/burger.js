var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function( vals, cols, cb) {
        orm.insertOne("burgers", vals, cols, function(res) {
            cb(res);
        });
    },
    updateOne: function(objValsCol, condition, cb) {
        orm.updateOne("burgers", objValsCol, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;