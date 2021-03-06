
exports.up = function(knex) {
  return knex.schema.createTable('category', table => {
    table.increments('id')
    table.text('category_name').notNullable()   
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('category')

};
