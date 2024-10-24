// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
import { mineralRoutes } from './route/mineral.route'
import cors from "@fastify/cors"

const fastify = Fastify({
  logger: true
})

// cors configuration
fastify.register(cors, {
  origin: 'http://localhost:5173',
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