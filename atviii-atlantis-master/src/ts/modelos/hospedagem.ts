// Hospedagem.ts
import { Acomodacao } from "./acomodacao";

export class Hospedagem {
  nomeHospede: string;
  dataCheckIn: Date;
  acomodacao: Acomodacao;

  constructor(nomeHospede: string, dataCheckIn: Date, acomodacao: Acomodacao) {
    this.nomeHospede = nomeHospede;
    this.dataCheckIn = dataCheckIn;
    this.acomodacao = acomodacao;
  }

  // Método para obter detalhes da hospedagem
  detalhesHospedagem(): string {
    return `Hóspede: ${this.nomeHospede}, Acomodação: ${this.acomodacao.nome}, Check-in: ${this.dataCheckIn.toLocaleDateString()}`;
  }
}
