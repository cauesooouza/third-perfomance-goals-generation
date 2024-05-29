export interface produtoInterface {
    id: number,
    nome: string,
    preco: string,
    foto: string,
    categoria?: {
      id: number,
      nome: string
      produto: []
    }
  }