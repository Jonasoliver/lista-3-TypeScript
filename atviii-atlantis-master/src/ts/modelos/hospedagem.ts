import { Acomodacao } from "./acomodacao";

export class Hospedagem {
  nomeHospede: string;
  dataCheckIn: Date;
  dataCheckOut: Date;
  acomodacao: Acomodacao;

  constructor(nomeHospede: string, dataCheckIn: Date, dataCheckOut: Date, acomodacao: Acomodacao) {
    this.nomeHospede = nomeHospede;
    this.dataCheckIn = dataCheckIn;
    this.dataCheckOut = dataCheckOut;
    this.acomodacao = acomodacao;
  }

  // Método para obter detalhes da hospedagem
  detalhesHospedagem(): string {
    return `Hóspede: ${this.nomeHospede}, Acomodação: ${this.acomodacao.nome}, Check-in: ${this.dataCheckIn.toLocaleDateString()}, Check-out: ${this.dataCheckOut.toLocaleDateString()}`;
  }
}
