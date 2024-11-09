// GerenciadorHospedagens.ts
import { Hospedagem } from "./hospedagem";
import { Acomodacao } from "./acomodacao";

export class GerenciadorHospedagens {
  private hospedagens: Hospedagem[] = [];

  // Método para registrar uma nova hospedagem
  registrarHospedagem(nomeHospede: string, dataCheckIn: Date, acomodacao: Acomodacao): string {
    // Verificar se a acomodação já está ocupada
    if (this.verificarDisponibilidade(acomodacao)) {
      const hospedagem = new Hospedagem(nomeHospede, dataCheckIn, acomodacao);
      this.hospedagens.push(hospedagem);
      return `Reserva confirmada para ${nomeHospede} na acomodação ${acomodacao.nome}`;
    } else {
      return `A acomodação ${acomodacao.nome} já está ocupada.`;
    }
  }

  // Método para verificar a disponibilidade de uma acomodação
  verificarDisponibilidade(acomodacao: Acomodacao): boolean {
    for (let hospedagem of this.hospedagens) {
      if (hospedagem.acomodacao === acomodacao) {
        return false; // Acomodação já está ocupada
      }
    }
    return true; // não esta ocupada
  }

  // Método para listar todas as hospedagens
  listarHospedagens(): string[] {
    return this.hospedagens.map(hospedagem => hospedagem.detalhesHospedagem());
  }
}
