import Sequelize from "sequelize";

import db from "../config/dbConfig.js";

const footballModel = db.define("footballAPI", {
    nameOfteam: {
        type: Sequelize.DataTypes.STRING
    },
    homeKitColor: {
        type: Sequelize.DataTypes.STRING
    },
    awayKitColor: {
        type: Sequelize.DataTypes.STRING
    },
    numberOfPlayers: {
        type: Sequelize.DataTypes.INET
    },
    playerFirstName: {
        type: Sequelize.DataTypes.STRING
    },
    playerLastName: {
        type: Sequelize.DataTypes.STRING
    },
    playerAge: {
        type: Sequelize.DataTypes.INET
    },
    playerCountry: {
        type: Sequelize.DataTypes.STRING
    },
    playerJerseyNumber: {
        type: Sequelize.DataTypes.INET
    },
    playerSigningFee: {
        type: Sequelize.DataTypes.DOUBLE
    },
    clubOwnerName: {
        type: Sequelize.DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default footballModel;