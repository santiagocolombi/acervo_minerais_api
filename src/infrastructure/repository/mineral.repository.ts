import { minerais } from "./data";

export class MineralRepository {
  findOne(props: { name: string }) {
    const { name } = props
    return minerais.find(mineral => mineral.name === name)
  }
}