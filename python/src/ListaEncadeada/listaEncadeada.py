from src.No.no import No

class ListaEncadeada:
    def __init__(self):
        self.tamanho: int = 0
        self.inicio: No = None

    def taVazia(self) -> bool:
        return self.tamanho == 0
    
    def obterUltimo(self) -> No:
        atual = self.inicio
        while atual.proximo != None:
            atual = atual.proximo        
        return atual
    
    def inserir(self, no: No) -> None:
        if self.taVazia():
            self.inicio = no
        else:
            self.obterUltimo().proximo = no
        self.tamanho += 1

    def remover(self, valor) -> No | None:
        achou = self.buscar(self.inicio, valor)
        if achou:
            excluido = achou.proximo
            achou.proximo = achou.proximo.proximo
            self.tamanho -= 1
            return excluido
        return None
    
    def buscar(self, no: No, valor):
        if no.valor.nome == valor:
            return no 
        elif no.temProximo() and no.proximo.valor.nome == valor:
            return no
        elif not no.temProximo():
            return None
        else:
            return self.buscar(no.proximo, valor)
    
    def removerTodos(self, valor) -> list[No]:
        removidos = []
        while True:
            rem = self.remover(valor)

            if rem:
                removidos.append(rem)
            else:
                return removidos 
        

        
    
    

