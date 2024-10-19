import { MineralRepository } from "../../repository/mineral.repository"
import { FastifyReply, FastifyRequest } from "fastify"

const mineralRepository = new MineralRepository()

export class MineralController {
  findOne(request: FastifyRequest, reply: FastifyReply) {
    const { name } = request.query as { name: string }
    const mineral = mineralRepository.findOne({ name })
    reply.send(mineral)
  }
}