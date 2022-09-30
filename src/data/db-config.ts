const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "src/data/dev.sqlite3"
    }
});

export default knex;