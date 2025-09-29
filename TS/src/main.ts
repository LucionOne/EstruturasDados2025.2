import { Fila } from './Models/fila.js';
import {Pilha} from './Models/pilha.js';
import { ListaEncadeada } from "./Models/ListaEncadeada"
import { ListaDuplamenteEncadeada } from "./Models/ListaDuplamenteEncadeada"


const minhaFila = new Fila<number>();

console.log('A fila está vazia?', minhaFila.vazio());

console.log('Inserindo os elementos 10, 20 e 30...');
minhaFila.inserir(10);
minhaFila.inserir(20);
minhaFila.inserir(30);

console.log('--- Conteúdo da fila ---');
console.log(minhaFila.listar());

console.log('Tamanho atual da fila:', minhaFila.tamanho_fila());

console.log('Elemento no topo (primeiro):', minhaFila.frente());

console.log('Removendo o primeiro elemento:', minhaFila.apagar());
console.log('Novo primeiro elemento:', minhaFila.frente());

console.log('--- Conteúdo da fila após remover ---');
console.log(minhaFila.listar());

console.log('Tamanho atual da fila:', minhaFila.tamanho_fila());

const minhaPilha = new Pilha<string>();

minhaPilha.inserir('cleive');
minhaPilha.inserir('rafael');
minhaPilha.inserir('lucas');

console.log('Tamanho da pilha:', minhaPilha.tamanho_pilha());
console.log('Elemento no topo:', minhaPilha.topo_valor());

console.log('--- Conteúdo da pilha ---');
console.log(minhaPilha.listar());

console.log('Apagando o topo:', minhaPilha.apagar());
console.log('Novo topo:', minhaPilha.topo_valor());

console.log('A pilha está vazia?', minhaPilha.empty());


function main() {
  console.log("===== Lista Encadeada =====")
  const lista = new ListaEncadeada<number>()
  lista.adicionar(10)
  lista.adicionar(20)
  lista.adicionarInicio(5)
  lista.imprimir()
  lista.remover(20)
  lista.imprimir()

  console.log("\n===== Lista Duplamente Encadeada =====")
  const listaDupla = new ListaDuplamenteEncadeada<string>()
  listaDupla.adicionar("A")
  listaDupla.adicionar("B")
  listaDupla.adicionarInicio("Início")
  listaDupla.imprimirFrente()
  listaDupla.imprimirTras()
  listaDupla.remover("B")
  listaDupla.imprimirFrente()
}

main()
