# Cycle List

Lista cíclica criada a partir de um Array ou Set.

_Obs.: Sempre ter imutabilidade em mente!_

## Métodos

1. <del>`.length`: Retorna a quantidade de itens na lista.</del>
1. <del>`.get()`: Retorna o próximo item da lista e move ponteiro. Lança erro se a lista estiver vazia.</del>
1. <del>`.got()`: Retorna o item anterior da lista e move ponteiro. Lança erro se a lista estiver vazia.</del>
1. <del>`.get(default_)`: Retorna o próximo item da lista. Se a lista estiver vazia, retorna `default_`.</del>
1. <del>`.head(n)`: Retorna os próximos `n` itens da lista em um novo **Cycle**.</del>
1. <del>`.tail(n)`: Retorna os `n` itens anteriores da lista em um novo **Cycle**.</del>
1. `.dup`: Retorna um novo **Cycle** com a mesma lista.
1. `.uniq`: Retorna um novo **Cycle** removendo os itens duplicados.
1. `.array`: Retorna um array começando pelo item que está no ponteiro.
1. <del>`.empty`: Retorna `true` se a lista estiver vazia e `false` caso contrário.</del>
1. `.append(v)`: Cria novo **Cycle** adicionando `v` na última posição da lista. Não move o ponteiro.
1. `.prepend(v)`: Cria novo **Cycle** adicionando `v` na primeira posição da lista. Não move o ponteiro.
1. `.map(fn)`: Retorna novo **Cycle** mapeando todos os itens da lista começando da posição atual do ponteiro.
1. `.filter(fn)`: Retorna novo **Cycle** filtrando todos os itens da lista começando da posição atual do ponteiro.
1. `.has(v)`: Retorna `true` se a lista tem o item `v`, e falso caso contrário.
1. `.has(fn)`: Retorna `true` se a função `fn` retornar `true` para algum item da lista. Caso contrário retorna `false`.
1. `.concat(c1, c2, c3, ...)`: Cria um novo **Cycle** concatenando com outros **Cycle**s. Mantém ponteiro do **Cycle** original.
