import Processo from "../abstracoes/processo";
import MenuReservas from "../menus/menuReservas";
import { GerenciadorHospedagens } from "../modelos/gerenciadorHospedagens";
import { Acomodacao } from "../modelos/acomodacao";
import Diretor from "../modelos/diretor";  // Certifique-se de importar o Diretor

export default class Reservas extends Processo {
    private gerenciadorHospedagens: GerenciadorHospedagens;
    private diretor: Diretor;

    constructor(gerenciadorHospedagens: GerenciadorHospedagens, diretor: Diretor) {
        super();
        this.gerenciadorHospedagens = gerenciadorHospedagens;
        this.diretor = diretor;
        this.menu = new MenuReservas();
    }

    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero("Qual opção desejada?");

        switch (this.opcao) {
            case 1:
                this.listarAcomadacoesDisponiveis();
                break;
            case 2:
                this.fazerReserva();
                break;
            case 3:
                this.consultarHospedagens();
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
    private listarAcomadacoesDisponiveis() {
        console.log("\nAcomodações Disponíveis:");
        this.diretor.listarAcomodacoes(); // Certifique-se de que o Diretor tem esse método.
    }

    // Fazer uma nova reserva
    private fazerReserva() {
        const nomeHospede = this.entrada.receberTexto("Digite o nome do hóspede:");
        const dataCheckIn = new Date(this.entrada.receberTexto("Digite a data de Check-in (yyyy-mm-dd):"));

        this.listarAcomadacoesDisponiveis();
        const escolhaAcomodacao = parseInt(this.entrada.receberTexto("Escolha a acomodação (número):")) - 1;

        const acomodacaoEscolhida = this.diretor.acomodacoes[escolhaAcomodacao];

        if (acomodacaoEscolhida) {
            const mensagem = this.gerenciadorHospedagens.registrarHospedagem(nomeHospede, dataCheckIn, acomodacaoEscolhida);
            console.log(mensagem);
        } else {
            console.log("Acomodação inválida.");
        }
    }

    // Consultar as hospedagens atuais
    private consultarHospedagens() {
        const hospedagens = this.gerenciadorHospedagens.listarHospedagens();
        if (hospedagens.length > 0) {
            console.log("\nHospedagens Atuais:");
            hospedagens.forEach(hospedagem => console.log(hospedagem));
        } else {
            console.log("Não há hospedagens registradas.");
        }
    }
}
