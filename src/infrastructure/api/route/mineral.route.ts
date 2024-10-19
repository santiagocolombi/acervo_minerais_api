import { FastifyInstance } from "fastify";
import { MineralController } from "../controller/mineral.controller";

const mineralController = new MineralController()

export async function mineralRoutes(app: FastifyInstance) {
  app.get("/find-one", mineralController.findOne)
  app.get("/find-many", mineralController.findMany)
}