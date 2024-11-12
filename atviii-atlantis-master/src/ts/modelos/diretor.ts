import { Acomodacao } from "./acomodacao";
import CasalSimples from "./casalSimples";
import FamiliaSimples from "./FamiliaSimples";
import FamiliaSuper from "./FamiliaSuper";
import FamiliaPlus from "./FamiliaPlus";
import SolteiroSimples from "./solteiroSimples";
import SolteiroMais from "./solteiroMais";

export default class Diretor {
  public acomodacoes: Acomodacao[];

  constructor() {
    this.acomodacoes = [];
  }

  adicionarAcomodacao(acomodacao: Acomodacao): void {
    this.acomodacoes.push(acomodacao);
  }

  listarAcomodacoes(): void {
    if (this.acomodacoes.length > 0) {
      this.acomodacoes.forEach((acomodacao, index) => {
        console.log(`${index + 1}. ${acomodacao.nome}`);
      });
    } else {
      console.log("Nenhuma acomodação disponível.");
    }
  }

  encontrarAcomodacaoPorNome(nome: string): Acomodacao | undefined {
    return this.acomodacoes.find((acomodacao) => acomodacao.nome === nome);
  }

  removerAcomodacao(nome: string): void {
    const index = this.acomodacoes.findIndex((acomodacao) => acomodacao.nome === nome);
    if (index !== -1) {
      this.acomodacoes.splice(index, 1);
    } else {
      console.log("Acomodação não encontrada.");
    }
  }

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
