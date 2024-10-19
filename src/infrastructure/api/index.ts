// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
import { mineralRoutes } from './route/mineral.route'

const fastify = Fastify({
  logger: true
})

// Declare a route

fastify.register(mineralRoutes, { prefix: "mineral" })

// Run the server!
fastify.listen({ port: 3000 }, function (err, _) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})