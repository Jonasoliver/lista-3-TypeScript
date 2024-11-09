import { Acomodacao } from "./acomodacao";

export default class FamiliaPlus extends Acomodacao {
  constructor() {
    super(
      "Familia Plus",     // nome
      5,                  // camaSolteiro
      1,                  // camaCasal
      2,                  // suite
      true,               // climatizacao
      2                   // garagem
    );
  }
}
