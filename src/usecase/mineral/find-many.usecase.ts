import { MineralRepository } from "../../infrastructure/repository/mineral.repository";

const mineralRepository = new MineralRepository()

export class FindManyMineralUsecase {
  execute(input: { name: string[] }) {
    const { name } = input
    const mineral = mineralRepository.findMany({ name })
    return mineral
  }
}