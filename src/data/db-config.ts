const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "src/data/dev.sqlite3"
    }
});

const config = require('../../knexfile');

const db = knex(config.development);

export default db;