
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.text('product_name').notNullable()
    table.integer('category_id')
        .references('category.id')
        .notNullable()

    table.integer('amount').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};
