import { NoArvore } from './NoArvore';

export class ArvoreBinaria<T> {
  public raiz: NoArvore<T> | null;
  public tamanho: number;

  constructor() {
    this.raiz = null;
    this.tamanho = 0;
  }

  inserir(elemento: T): void {
    this.raiz = this.inserirRecursivo(this.raiz, elemento);
    this.tamanho++;
  }

  public inserirRecursivo(no: NoArvore<T> | null, elemento: T): NoArvore<T> {
    if (no === null) {
      return new NoArvore(elemento);
    }
    if (elemento < no.dado) {
      no.esquerda = this.inserirRecursivo(no.esquerda, elemento);
    } else if (elemento > no.dado) {
      no.direita = this.inserirRecursivo(no.direita, elemento);
    }
    return no;
  }

  remover(elemento: T): T | string {
    if (this.vazio()) {
      return 'Árvore vazia';
    }
    const resultado = this.removerRecursivo(this.raiz, elemento);
    if (resultado.encontrado) {
      this.tamanho--;
      return resultado.valorRemovido!;
    }
    return 'Elemento não encontrado';
  }

public removerRecursivo(no: NoArvore<T> | null, elemento: T): { 
  encontrado: boolean; 
  valorRemovido: T; 
  noAtualizado: NoArvore<T> | null 
} {
  if (no === null) {
    return { encontrado: false, valorRemovido: elemento, noAtualizado: null };
  }
  if (elemento < no.dado) {
    const esq = this.removerRecursivo(no.esquerda, elemento);
    no.esquerda = esq.noAtualizado;
    return { 
      encontrado: esq.encontrado, 
      valorRemovido: esq.valorRemovido, 
      noAtualizado: no 
    };
  } else if (elemento > no.dado) {
    const dir = this.removerRecursivo(no.direita, elemento);
    no.direita = dir.noAtualizado;
    return { 
      encontrado: dir.encontrado, 
      valorRemovido: dir.valorRemovido, 
      noAtualizado: no 
    };
  } else {
    if (no.esquerda === null && no.direita === null) {
      return { encontrado: true, valorRemovido: no.dado, noAtualizado: null };
    } else if (no.esquerda === null) {
      return { encontrado: true, valorRemovido: no.dado, noAtualizado: no.direita };
    } else if (no.direita === null) {
      return { encontrado: true, valorRemovido: no.dado, noAtualizado: no.esquerda };
    } else {
      const menor = this.encontrarMenor(no.direita);
      no.dado = menor.dado;
      const dir = this.removerRecursivo(no.direita, menor.dado);
      no.direita = dir.noAtualizado;
      return { encontrado: true, valorRemovido: menor.dado, noAtualizado: no };
    }
  }
}

  public encontrarMenor(no: NoArvore<T>): NoArvore<T> {
    while (no.esquerda !== null) {
      no = no.esquerda;
    }
    return no;
  }

  buscar(elemento: T): boolean {
    return this.buscarRecursivo(this.raiz, elemento) !== null;
  }

  public buscarRecursivo(no: NoArvore<T> | null, elemento: T): NoArvore<T> | null {
    if (no === null || no.dado === elemento) {
      return no;
    }
    if (elemento < no.dado) {
      return this.buscarRecursivo(no.esquerda, elemento);
    }
    return this.buscarRecursivo(no.direita, elemento);
  }

  tamanho_arvore(): number {
    return this.tamanho;
  }

  vazio(): boolean {
    return this.tamanho === 0;
  }

  altura(): number {
    return this.alturaRecursiva(this.raiz);
  }

  public alturaRecursiva(no: NoArvore<T> | null): number {
    if (no === null) {
      return 0;
    }
    return 1 + Math.max(this.alturaRecursiva(no.esquerda), this.alturaRecursiva(no.direita));
  }

  listarInOrder(): string {
    const elementos: T[] = [];
    this.inOrderRecursivo(this.raiz, elementos);
    return elementos.length === 0 ? 'Árvore vazia' : elementos.join(' -> ');
  }

  public inOrderRecursivo(no: NoArvore<T> | null, elementos: T[]): void {
    if (no !== null) {
      this.inOrderRecursivo(no.esquerda, elementos);
      elementos.push(no.dado);
      this.inOrderRecursivo(no.direita, elementos);
    }
  }
}