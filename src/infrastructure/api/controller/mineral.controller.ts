import { FindManyMineralUsecase } from "../../../usecase/mineral/find-many.usecase"
import { FindOneMineralUsecase } from "../../../usecase/mineral/find-one.usecase"
import { FastifyReply, FastifyRequest } from "fastify"


const findOneMineralUsecase = new FindOneMineralUsecase()
const findManyMineralUsecase = new FindManyMineralUsecase()

export class MineralController {
  findOne(request: FastifyRequest, reply: FastifyReply) {
    const { name } = request.query as { name: string }
    const mineral = findOneMineralUsecase.execute({ name })
    reply.send(mineral)
  }
  findMany(request: FastifyRequest, reply: FastifyReply) {
    const { name } = request.query as { name: string[] }
    const mineral = findManyMineralUsecase.execute({ name })
    reply.send(mineral)
  }
}