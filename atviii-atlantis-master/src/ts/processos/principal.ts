import Processo from "../abstracoes/processo";
import MenuPrincipal from "../menus/menuPricipal";
import TipoCadastroCliente from "./tipoCadastroCliente";
import TipoListagemClientes from "./tipoListagemClientes";
import AtualizarClienteTitular from "./atualizarCliente";
import DeletarClienteTitular from "./deletarClienteTitular";
import Cliente from "../modelos/cliente";
import Diretor from "../modelos/diretor";
import { GerenciadorHospedagens } from "../modelos/gerenciadorHospedagens";
import Reservas from "./reserva";

export default class Principal extends Processo {
    private clienteTitular!: Cliente;
    private diretor: Diretor;
    private gerenciadorHospedagens: GerenciadorHospedagens;

    constructor() {
        super();
        this.execucao = true;
        this.menu = new MenuPrincipal();
        
        this.clienteTitular = new Cliente("Nome", "Nome Social", new Date());
        
        // Inicializa o diretor e o gerenciador de hospedagens apenas uma vez no construtor do Principal
        this.diretor = new Diretor();
        this.gerenciadorHospedagens = new GerenciadorHospedagens();

        // Cria as acomodações
        this.diretor.criarCasalSimples();
        this.diretor.criarFamiliaSimples();
        this.diretor.criarFamiliaSuper();
        this.diretor.criarFamiliaPlus();
        this.diretor.criarSolteiroSimples();
        this.diretor.criarSolteiroMais();
    }

    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');

        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente(this.clienteTitular);
                this.processo.processar();
                break;
            case 2:
                this.processo = new AtualizarClienteTitular();
                this.processo.processar();
                break;
            case 3:
                this.processo = new TipoListagemClientes();
                this.processo.processar();
                break;
            case 4:
                this.processo = new DeletarClienteTitular();
                this.processo.processar();
                break;
            case 5:
                // Passa as instâncias existentes de GerenciadorHospedagens e Diretor para Reservas
                this.processo = new Reservas(this.gerenciadorHospedagens, this.diretor);
                this.processo.processar();
                break;
            case 0:
                this.execucao = false;
                console.log('Até logo!');
                console.clear();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}
