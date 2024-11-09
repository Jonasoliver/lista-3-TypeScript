import { Acomodacao } from "./acomodacao";
import CasalSimples from "./casalSimples";
import FamiliaSimples from "./FamiliaSimples";
import FamiliaSuper from "./FamiliaSuper";
import FamiliaPlus from "./FamiliaPlus";
import SolteiroSimples from "./solteiroSimples";
import SolteiroMais from "./solteiroMais";

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
    this.acomodacoes.forEach((acomodacao) => {
      console.log(acomodacao);
    });
  }

  // Encontra uma acomodação pelo nome
  encontrarAcomodacaoPorNome(nome: string): Acomodacao | undefined {
    return this.acomodacoes.find(
      (acomodacao) => acomodacao.nome === nome
    );
  }

  // Remove uma acomodação pelo nome
  removerAcomodacao(nome: string): void {
    const index = this.acomodacoes.findIndex(
      (acomodacao) => acomodacao.nome === nome
    );
    if (index !== -1) {
      this.acomodacoes.splice(index, 1);
    } else {
      console.log("Acomodação não encontrada.");
    }
  }

  // Método para contar quantas acomodações de um tipo específico existem
  contarPorTipo(tipo: string): number {
    return this.acomodacoes.filter(
      (acomodacao) => acomodacao.nome === tipo
    ).length;
  }

  // Métodos para criar e adicionar diferentes tipos de acomodações
  criarCasalSimples(): Acomodacao {
    const acomodacao = new CasalSimples();
    this.adicionarAcomodacao(acomodacao);
    return acomodacao;
  }

  criarFamiliaSimples(): Acomodacao {
    const acomodacao = new FamiliaSimples();
    this.adicionarAcomodacao(acomodacao);
    return acomodacao;
  }

  criarFamiliaSuper(): Acomodacao {
    const acomodacao = new FamiliaSuper();
    this.adicionarAcomodacao(acomodacao);
    return acomodacao;
  }

  criarFamiliaPlus(): Acomodacao {
    const acomodacao = new FamiliaPlus();
    this.adicionarAcomodacao(acomodacao);
    return acomodacao;
  }

  criarSolteiroSimples(): Acomodacao {
    const acomodacao = new SolteiroSimples();
    this.adicionarAcomodacao(acomodacao);
    return acomodacao;
  }

  criarSolteiroMais(): Acomodacao {
    const acomodacao = new SolteiroMais();
    this.adicionarAcomodacao(acomodacao);
    return acomodacao;
  }
}
