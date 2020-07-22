import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index) //Listar todos os itens

routes.post('/points', pointsController.create) //Criar ponto de coleta
routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)


export default routes