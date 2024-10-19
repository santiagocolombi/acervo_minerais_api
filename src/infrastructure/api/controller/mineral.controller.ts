import { FindOneMineralUsecase } from "../../../usecase/mineral/find-one.usecase"
import { FastifyReply, FastifyRequest } from "fastify"


const findOneMineralUsecase = new FindOneMineralUsecase()

export class MineralController {
  findOne(request: FastifyRequest, reply: FastifyReply) {
    const { name } = request.query as { name: string }
    const mineral = findOneMineralUsecase.execute({ name })
    reply.send(mineral)
  }
}