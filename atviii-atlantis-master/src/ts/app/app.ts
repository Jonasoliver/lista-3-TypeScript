import Processo from "../abstracoes/processo";
import Principal from "../processos/principal";
import Diretor from "../modelos/diretor"; 
import { GerenciadorHospedagens } from "../modelos/gerenciadorHospedagens"; 
import Reservas from "../processos/reserva"

console.clear();
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

// Inicializando as instâncias necessárias
const diretor = new Diretor();
diretor.criarCasalSimples();
diretor.criarFamiliaSimples();
diretor.criarFamiliaSuper();
diretor.criarFamiliaPlus();
diretor.criarSolteiroSimples();
diretor.criarSolteiroMais();

const gerenciadorHospedagens = new GerenciadorHospedagens();
const reservas = new Reservas(gerenciadorHospedagens, diretor);

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}