const {Sequelize} = require("sequelize");
const db = require("./index.js");
const {Op,QueryTypes} = require("sequelize");

const Order = db.define(
  "order", {
    iOrderId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    iProductId: {
      type: Sequelize.INTEGER,
    },
    transactionId: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    validTill: {
      type: Sequelize.DATE,
    },
    iUserId: {
        type: Sequelize.INTEGER,
    },
    deliveryStatus: {
        type: Sequelize.STRING
    }
  }, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);

module.exports = Order;