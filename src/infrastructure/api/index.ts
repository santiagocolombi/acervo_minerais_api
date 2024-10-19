// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', function (_, reply) {
  reply.send({ name: 'turmanila' })
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, _) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})