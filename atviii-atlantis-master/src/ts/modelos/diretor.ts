import { Acomodacao } from "./acomodacao";
import  CasalSimples  from "./casalSimples";
import  FamiliaSimples  from "./FamiliaSimples";
import  FamiliaSuper  from "./FamiliaSuper";
import  FamiliaPlus  from "./FamiliaPlus";
import  SolteiroSimples from "./solteiroSimples";
import  SolteiroMais  from "./solteiroMais";

export default class Diretor {
  public acomodacoes: Acomodacao[];

  constructor() {
    this.acomodacoes = [];
  }

  // Adiciona uma nova acomodação
  adicionarAcomodacao(acomodacao: Acomodacao): void {
    this.acomodacoes.push(acomodacao);
  }

  // Lista todas as acomodações disponíveis
  listarAcomodacoes(): void {
    if (this.acomodacoes.length > 0) {
      this.acomodacoes.forEach((acomodacao, index) => {
        console.log(`${index + 1}. ${acomodacao.nome}`);
      });
    } else {
      console.log("Nenhuma acomodação disponível.");
    }
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
      console.log(`Acomodação '${nome}' removida com sucesso.`);
    } else {
      console.log("Acomodação não encontrada.");
    }
  }

  // Métodos para criar diferentes tipos de acomodações
  criarCasalSimples(): Acomodacao {
    return this.criarAcomodacao(CasalSimples);
  }

  criarFamiliaSimples(): Acomodacao {
    return this.criarAcomodacao(FamiliaSimples);
  }

  criarFamiliaSuper(): Acomodacao {
    return this.criarAcomodacao(FamiliaSuper);
  }

  criarFamiliaPlus(): Acomodacao {
    return this.criarAcomodacao(FamiliaPlus);
  }

  criarSolteiroSimples(): Acomodacao {
    return this.criarAcomodacao(SolteiroSimples);
  }

  criarSolteiroMais(): Acomodacao {
    return this.criarAcomodacao(SolteiroMais);
  }

  // Método auxiliar para criar acomodações de qualquer tipo
  public criarAcomodacao(acomodacaoType: new () => Acomodacao): Acomodacao {
    const acomodacao = new acomodacaoType();
    this.adicionarAcomodacao(acomodacao);
    return acomodacao;
  }
}
