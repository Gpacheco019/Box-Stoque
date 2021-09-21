const express = require('express')
const routes = express.Router()


const Category = require('./controller/CategoryController')

// Rotas de Categoria
routes.get('/categoria', Category.getAllCategory)
routes.post('/categoria', Category.createCategory)
routes.delete('/categoria/:id', Category.deleteCategory)
routes.put('/category/:id', Category.editCategory)



module.exports = routes