export class Clientes {
  id: string;
  nome: string;
  cpfCnpj: string;
  documento: string;
  telefone?: any;
  celular?: any;
  email?: any;
  fatCep?: any;
  fatRua?: any;
  fatNumero?: any;
  fatComplemento?: any;
  fatBairro?: any;
  fatCidade?: any;
  fatEstado?: any;
  fatTelefone?: any;
  entCep?: any;
  entRua?: any;
  entNumero?: any;
  entComplemento?: any;
  entBairro?: any;
  entCidade?: any;
  entEstado?: any;
  entTelefone?: any;
  entReferencia?: any;
  criadoPor?: any;
  criadoEm?: any;
  alteradoPor?: any;
  alteradoEm?: any;
  constructor() {
    this.entEstado = '';
    this.fatEstado = '';
  }
}
