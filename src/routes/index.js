const { Router } = require("express")

const usersRouter = require('./users.routes')
const dishesRoutes = require("./dishes.routes")
const ordersRoutes = require("./orders.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/dishes', dishesRoutes)
routes.use('/orders', ordersRoutes)
routes.use('/sessions', sessionsRoutes)

module.exports = routes