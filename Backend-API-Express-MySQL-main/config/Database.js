import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','21044555',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;