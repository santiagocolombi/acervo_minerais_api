import { FastifyInstance } from "fastify";
import { MineralHandler } from "../handler/mineral.handler";

const mineralHandler = new MineralHandler()

export async function mineralRoutes(app: FastifyInstance) {
  app.get("/find-one", mineralHandler.findOne)
  app.get("/find-many", mineralHandler.findMany)
}