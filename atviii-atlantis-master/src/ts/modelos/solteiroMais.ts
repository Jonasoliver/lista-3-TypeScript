import { Acomodacao } from "./acomodacao";

export default class SolteiroMais extends Acomodacao {
  constructor() {
    super(
      "Solteiro Mais",    // nome
      0,                  // camaSolteiro
      1,                  // camaCasal
      1,                  // suite
      true,               // climatizacao
      1                   // garagem
    );
  }
}
