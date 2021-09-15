const knex = require('../database')

module.exports = {
  async getAllCategory(req, res, next) {
    try {
      const results = await knex('category')
      return res.json(results)

    } catch (err) {
      next(err)
    }
  },

  async createCategory(req, res, next) {
    try {
      const { category_name } = req.body

      await knex('category').insert({category_name})
      return res.status(201).send('Categoria criada com sucesso.')
    } catch (err) {
      next(err)
    }
  },

  async deleteCategory(req, res, next) {
    try {
      const { id } = req.params

      await knex('category')
        .where({id})
        .delete()
      return res.send('Categoria deletada.')
    } catch (err) {
      next(err)
    }
  }
  
}