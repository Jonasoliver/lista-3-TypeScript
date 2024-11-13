import { Hospedagem } from "./hospedagem";
import { Acomodacao } from "./acomodacao";

export class GerenciadorHospedagens {
  private hospedagens: Hospedagem[] = [];

  // Método para registrar uma nova hospedagem com data de entrada e saída
  registrarHospedagem(nomeHospede: string, dataCheckIn: Date, dataCheckOut: Date, acomodacao: Acomodacao): string {
    // Verificar se a acomodação já está ocupada
    if (this.verificarDisponibilidade(acomodacao, dataCheckIn, dataCheckOut)) {
      const hospedagem = new Hospedagem(nomeHospede, dataCheckIn, dataCheckOut, acomodacao);
      this.hospedagens.push(hospedagem);
      return `Reserva confirmada para ${nomeHospede} na acomodação ${acomodacao.nome}`;
    } else {
      return `A acomodação ${acomodacao.nome} já está ocupada para as datas selecionadas.`;
    }
  }

  // Método para verificar a disponibilidade de uma acomodação com base nas datas
  verificarDisponibilidade(acomodacao: Acomodacao, dataCheckIn: Date, dataCheckOut: Date): boolean {
    for (let hospedagem of this.hospedagens) {
      if (
        hospedagem.acomodacao === acomodacao &&
        ((dataCheckIn >= hospedagem.dataCheckIn && dataCheckIn <= hospedagem.dataCheckOut) ||
         (dataCheckOut >= hospedagem.dataCheckIn && dataCheckOut <= hospedagem.dataCheckOut))
      ) {
        return false; // Acomodação já está ocupada nas datas
      }
    }
    return true; // Acomodação não está ocupada nas datas
  }

  // Método para listar todas as hospedagens
  listarHospedagens(): string[] {
    return this.hospedagens.map(hospedagem => hospedagem.detalhesHospedagem());
  }

  // Método para buscar hospedagens por hóspede
  listarHospedagensPorHospede(nomeHospede: string): string[] {
    return this.hospedagens
      .filter(hospedagem => hospedagem.nomeHospede === nomeHospede)
      .map(hospedagem => hospedagem.detalhesHospedagem());
  }
}
