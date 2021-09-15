// Update with your config settings.

module.exports = {
  development: {    
    client: 'pg',
    connection: {
      database: "box_stoque",
      user: "postgres",
      password: "gps123"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
  }, 

};
