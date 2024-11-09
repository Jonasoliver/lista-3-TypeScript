// CasalSimples.ts
import { Acomodacao } from "./acomodacao";

class CasalSimples extends Acomodacao {
    constructor() {
      super("Casal Simples", 0, 1, 1, true, 1);
    }
  }
  
  // FamiliaSimples.ts
  
  class FamiliaSimples extends Acomodacao {
    constructor() {
      super("Família Simples", 2, 1, 1, true, 1);
    }
  }
  
  // FamiliaMais.ts
  
  class FamiliaMais extends Acomodacao {
    constructor() {
      super("Família Mais", 5, 1, 2, true, 2);
    }
  }
  
  // FamiliaSuper.ts
  
  class FamiliaSuper extends Acomodacao {
    constructor() {
      super("Família Super", 6, 2, 3, true, 2);
    }
  }
  
  // SolteiroSimples.ts
  
  class SolteiroSimples extends Acomodacao {
    constructor() {
      super("Solteiro Simples", 1, 0, 1, true, 0);
    }
  }
  
  // SolteiroMais.ts
  
  class SolteiroMais extends Acomodacao {
    constructor() {
      super("Solteiro Mais", 0, 1, 1, true, 1);
    }
  }
  