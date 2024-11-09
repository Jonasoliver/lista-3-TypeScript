import { Acomodacao } from "./acomodacao";

export default class FamiliaSuper extends Acomodacao {
  constructor() {
    super(
      "Familia Super",    // nome
      6,                  // camaSolteiro
      2,                  // camaCasal
      3,                  // suite
      true,               // climatizacao
      2                   // garagem
    );
  }
}
