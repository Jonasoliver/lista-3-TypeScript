import Menu from "../interfaces/menu";

export default class MenuAcomodacoes implements Menu {
    mostrar(): void {
        console.clear();
        console.log("****************************");
        console.log("| Menu de Acomodações       |");
        console.log("----------------------------");
        console.log("| 1 - Listar Acomodações Disponíveis");
        console.log("| 2 - Criar Acomodação de Casal Simples");
        console.log("| 3 - Criar Acomodação de Família Simples");
        console.log("| 4 - Criar Acomodação de Família Super");
        console.log("| 5 - Criar Acomodação de Família Plus");
        console.log("| 6 - Criar Acomodação de Solteiro Simples");
        console.log("| 7 - Criar Acomodação de Solteiro Mais");
        console.log("| 0 - Voltar ao Menu Principal");
        console.log("----------------------------");
    }
}
