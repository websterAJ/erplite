module.exports = (sequelize, Sequelize) => {
    return sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        enabled: {
            type: Sequelize.BOOLEAN
        }
    });
};