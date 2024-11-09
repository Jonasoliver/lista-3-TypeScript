import { Acomodacao } from "./acomodacao";

export default class Diretor {
  private acomodacoes: Acomodacao[];

  constructor() {
    this.acomodacoes = [];
  }

  // Adiciona uma acomodação à lista
  adicionarAcomodacao(acomodacao: Acomodacao): void {
    this.acomodacoes.push(acomodacao);
  }

  // Lista todas as acomodações
  listarAcomodacoes(): void {
    this.acomodacoes.forEach(acomodacao => {
      console.log(acomodacao);
    });
  }

  // Encontra uma acomodação pelo nome
  encontrarAcomodacaoPorNome(nome: string): Acomodacao | undefined {
    return this.acomodacoes.find(acomodacao => acomodacao.nome === nome);
  }

  // Remove uma acomodação pelo nome
  removerAcomodacao(nome: string): void {
    const index = this.acomodacoes.findIndex(acomodacao => acomodacao.nome === nome);
    if (index !== -1) {
      this.acomodacoes.splice(index, 1);
    } else {
      console.log("Acomodação não encontrada.");
    }
  }

  // Método para contar quantas acomodações de um tipo específico existem
  contarPorTipo(tipo: string): number {
    return this.acomodacoes.filter(acomodacao => acomodacao.nome === tipo).length;
  }
}
