// src/menus/menuReservas.ts
import Menu from "../interfaces/menu";

export default class MenuReservas implements Menu {
    mostrar(): void {
        console.clear();
        console.log("****************************");
        console.log("| Menu de Reservas         |");
        console.log("----------------------------");
        console.log("| 1 - Listar Acomodações Disponíveis");
        console.log("| 2 - Fazer uma Nova Reserva");
        console.log("| 3 - Consultar Hospedagens Atuais");
        console.log("| 0 - Voltar ao Menu Principal");
        console.log("----------------------------");
    }
}
