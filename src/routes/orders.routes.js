const { Router } = require('express')

const OrdersController = require("../controllers/OrdersController")

const ensureAuthenticated = require("../middleware/ensureAuthenticated")
const ensureUserIsAdmin = require("../middleware/ensureUserIsAdmin")

const ordersController = new OrdersController()

const ordersRoutes = Router()

ordersRoutes.use(ensureAuthenticated)

ordersRoutes.post("/", ordersController.create)
ordersRoutes.get('/', ordersController.index)
ordersRoutes.put('/', ensureUserIsAdmin, ordersController.update)

module.exports = ordersRoutes