import { Mineral } from "../../domain/mineral/entity"

const minerais: Mineral[] = [
  { name: "Quartzo", description: "Essa é a descrição do Quartzo" },
  { name: "Calcita", description: "Essa é a descrição da Calcita" },
  { name: "Dolomita", description: "Essa é a descrição da Dolomita" },
  { name: "Diamante", description: "Essa é a descrição do Diamante" },
  { name: "Ouro", description: "Essa é a descrição do Ouro" },
  {
    name: "Feldispato",
    description: "Essa é a descrição do Feldispato",
    properties: {
      color: "amarelo",
      diafaneidade: "transparente,translucido",
      trace: "incolor",
    }
  },
]

export {
  minerais
}