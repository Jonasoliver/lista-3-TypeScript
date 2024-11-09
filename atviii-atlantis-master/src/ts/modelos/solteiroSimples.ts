import { Acomodacao } from "./acomodacao";

export default class SolteiroSimples extends Acomodacao {
  constructor() {
    super(
      "Solteiro Simples", // nome
      1,                  // camaSolteiro
      0,                  // camaCasal
      1,                  // suite
      true,               // climatizacao
      0                   // garagem
    );
  }
}
