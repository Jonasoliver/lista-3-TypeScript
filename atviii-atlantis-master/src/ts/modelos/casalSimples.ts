// CasalSimples.ts
import { Acomodacao } from "./acomodacao";

export default class CasalSimples extends Acomodacao {
  constructor() {
    super(
      "Casal Simples",    // nome
      0,                  // camaSolteiro
      1,                  // camaCasal
      1,                  // suite
      true,               // climatizacao
      1                   // garagem
    );
  }
}
