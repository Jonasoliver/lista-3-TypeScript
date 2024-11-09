import { Acomodacao } from "./acomodacao";

export default class FamiliaSimples extends Acomodacao {
  constructor() {
    super(
      "Familia Simples",  // nome
      2,                  // camaSolteiro
      1,                  // camaCasal
      1,                  // suite
      true,               // climatizacao
      1                   // garagem
    );
  }
}
