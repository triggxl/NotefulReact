const jsonServer = require('json-server')
const db = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 'http://localhost:9090';

server.listen(PORT, () => {
  console.log(`Noteful json server started at PORT: ${PORT}`)
})

// commit changes...push to heroku...heroku-server/notes if error check heroku logs
