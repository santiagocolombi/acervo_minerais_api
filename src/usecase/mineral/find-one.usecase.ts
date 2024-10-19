import { MineralRepository } from "../../infrastructure/repository/mineral.repository";

const mineralRepository = new MineralRepository()

export class FindOneMineralUsecase {
  execute(input: { name: string }) {
    const { name } = input
    const mineral = mineralRepository.findOne({ name })
    return mineral
  }
}