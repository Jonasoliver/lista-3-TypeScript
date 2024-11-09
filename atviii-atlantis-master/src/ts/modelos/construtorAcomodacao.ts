// ConstrutorAcomodacao.ts
import { Acomodacao } from "./acomodacao";
import { Construtor } from "../interfaces/construtor"


export class ConstrutorAcomodacao implements Construtor {
    private nome: string = "";
    private numeroCamasSolteiro: number = 0;
    private numeroCamasCasal: number = 0;
    private suites: number = 0;
    private climatizacao: boolean = false;
    private garagem: number = 0;
  
    setNome(nome: string): this {
      this.nome = nome;
      return this;
    }
  
    setNumeroCamasSolteiro(numero: number): this {
      this.numeroCamasSolteiro = numero;
      return this;
    }
  
    setNumeroCamasCasal(numero: number): this {
      this.numeroCamasCasal = numero;
      return this;
    }
  
    setSuites(suites: number): this {
      this.suites = suites;
      return this;
    }
  
    setClimatizacao(climatizacao: boolean): this {
      this.climatizacao = climatizacao;
      return this;
    }
  
    setGaragem(garagem: number): this {
      this.garagem = garagem;
      return this;
    }
  
    construir(): Acomodacao {
      return new AcomodacaoConcreta(this.nome, this.numeroCamasSolteiro, this.numeroCamasCasal, this.suites, this.climatizacao, this.garagem);
    }
  }
  
  // AcomodacaoConcreta.ts
  
  class AcomodacaoConcreta extends Acomodacao {
    constructor(nome: string, numeroCamasSolteiro: number, numeroCamasCasal: number, suites: number, climatizacao: boolean, garagem: number) {
      super(nome, numeroCamasSolteiro, numeroCamasCasal, suites, climatizacao, garagem);
    }
  }
  