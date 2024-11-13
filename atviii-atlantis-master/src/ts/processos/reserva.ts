import Processo from "../abstracoes/processo";
import MenuAcomodacoes from "../menus/menuReservas";
import Diretor from "../modelos/diretor";
import { GerenciadorHospedagens } from "../modelos/gerenciadorHospedagens";
import { Acomodacao } from "../modelos/acomodacao";
import CasalSimples from "../modelos/casalSimples";
import FamiliaSimples from "../modelos/FamiliaSimples";
import FamiliaSuper from "../modelos/FamiliaSuper";
import FamiliaPlus from "../modelos/FamiliaPlus";
import SolteiroSimples from "../modelos/solteiroSimples";
import SolteiroMais from "../modelos/solteiroMais";

export default class Reservas extends Processo {
    private gerenciadorHospedagens: GerenciadorHospedagens;
    private diretor: Diretor;

    constructor(gerenciadorHospedagens: GerenciadorHospedagens, diretor: Diretor) {
        super();
        this.gerenciadorHospedagens = gerenciadorHospedagens;
        this.diretor = diretor;
        this.menu = new MenuAcomodacoes();
    }

    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero("Qual opção desejada?");

        switch (this.opcao) {
            case 1:
                this.listarAcomodacoesDisponiveis();
                break;
            case 2:
                this.criarAcomodacao(CasalSimples);
                break;
            case 3:
                this.criarAcomodacao(FamiliaSimples);
                break;
            case 4:
                this.criarAcomodacao(FamiliaSuper);
                break;
            case 5:
                this.criarAcomodacao(FamiliaPlus);
                break;
            case 6:
                this.criarAcomodacao(SolteiroSimples);
                break;
            case 7:
                this.criarAcomodacao(SolteiroMais);
                break;
            case 0:
                console.log("Voltando ao menu principal...");
                break;
            default:
                console.log("Opção inválida.");
                break;
        }
    }

    // Listar todas as acomodações disponíveis
    private listarAcomodacoesDisponiveis() {
        console.log("\nAcomodações Disponíveis:");
        this.diretor.listarAcomodacoes();
    }

    // Método genérico para criar qualquer tipo de acomodação
    private criarAcomodacao(acomodacaoType: new () => Acomodacao) {
        const nomeHospede = this.entrada.receberTexto("Digite o nome do hóspede:");
        const dataEntrada = new Date(this.entrada.receberTexto("Digite a data de entrada (yyyy-mm-dd):"));
        const dataSaida = new Date(this.entrada.receberTexto("Digite a data de saída (yyyy-mm-dd):"));

        const acomodacao = this.diretor.criarAcomodacao(acomodacaoType);
        const mensagem = this.gerenciadorHospedagens.registrarHospedagem(nomeHospede, dataEntrada, dataSaida, acomodacao);

        console.log("Cadastro feito com sucesso!");
        console.log(`Nome do hóspede: ${nomeHospede}`);
        console.log(`Data de entrada: ${dataEntrada.toLocaleDateString()}`);
        console.log(`Data de saída: ${dataSaida.toLocaleDateString()}`);
        console.log(`Tipo de acomodação: ${acomodacao.nome}`);
    }
}
