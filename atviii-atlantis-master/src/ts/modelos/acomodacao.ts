// Acomodacao.ts

export abstract class Acomodacao {
    nome: string;
    numeroCamasSolteiro: number;
    numeroCamasCasal: number;
    suites: number;
    climatizacao: boolean;
    garagem: number;
  
    constructor(nome: string, numeroCamasSolteiro: number, numeroCamasCasal: number, suites: number, climatizacao: boolean, garagem: number) {
      this.nome = nome;
      this.numeroCamasSolteiro = numeroCamasSolteiro;
      this.numeroCamasCasal = numeroCamasCasal;
      this.suites = suites;
      this.climatizacao = climatizacao;
      this.garagem = garagem;
    }
  
    public descricao(): string {
      return `Acomodação: ${this.nome}, Solteiro: ${this.numeroCamasSolteiro}, Casal: ${this.numeroCamasCasal}, Suítes: ${this.suites}, Climatização: ${this.climatizacao}, Garagem: ${this.garagem}`;
    }
  }
  