
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Telefonia'},
        {category_name: 'Periféricos'},
        {category_name: 'Notebook'},
        {category_name: 'Computadores'},
        {category_name: 'Consumiveis de Impressão'},
      ]);
    });
};
