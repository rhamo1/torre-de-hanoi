# Entrega: Torre de Hanoi

## Torre de Hanoi

A Torre de Hanoi é um quebra-cabeças.

Ele consiste de três varetas e um número de discos de diferentes tamanhos que podem ser encaixados em qualquer vareta. O jogo começa com todos os discos empilhados em uma vareta, do maior (embaixo) para o menor (no topo).

![](https://i.snag.gy/g1vxDG.jpg)

O objetivo do quebra-cabeças é mover toda a pilha para outra vareta obedecendo às seguintes regras:

1. Apenas um disco pode ser movido por vez.
2. Cada movimento consiste de pegar o disco de cima de uma das pilhas e movê-lo para o topo de outra pilha.
3. Nenhum disco pode ser colocado no topo de um disco menor.

Aqui está uma animação mostrando como um jogador pode completar o quebra-cabeças com 4 discos.

![](https://media.giphy.com/media/rutTKcoKSCSYM/giphy.gif)

Se quiser aprender mais sobre o jogo, você pode ler seu [artigo na Wikipédia](https://pt.wikipedia.org/wiki/Torre_de_Han%C3%B3i).

## Programação em Dupla

Vocês trabalharão **em duplas** para criar uma versão JavaScript de uma Torre de Hanoi.

O envio deve ser o trabalho realizado por você e seu colega -* (não copiem a solução escrita por outra pessoa).*

## Observação

**Não será permitido o uso de LIVE SHARE ou qualquer outra extensão de live coding em equipe, ao invés disso, tente pôr em prática seu conhecimento de git usando branchs.**

Aqui tem alguns sites de referência:

* [Comandos básicos de git](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
* [Resolver um conflito de merge usando a linha de comando](https://docs.github.com/pt/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line) 
* [Resolving Merge Conflicts from the GitLab UI](https://about.gitlab.com/blog/2016/09/06/resolving-merge-conflicts-from-the-gitlab-ui/)

## Dicas

* Faça cada torre ser uma caixa flex que empilha elementos de baixo para cima usando as seguintes propriedades CSS:

```css
{
   display: flex; 
   flex-direction: column-reverse; 
   align-items: center;
}
```

* Você precisa fazer o jogador clicar duas vezes para cada movimento: primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino. Use uma variável para registrar qual modo o jogador está.
* Adicione um handler de clique em cada uma das três torres. Use [event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget) dentro do handler de evento para determinar qual torre foi clicada.
* Use a propriedade DOM [childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount) para saber quantos discos estão em uma torre.
* Use a propriedade DOM [lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild) para saber qual é o disco no topo da torre.
* Use o método [DOM appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) para adicionar um disco a uma torre (você já usou este método várias vezes em tarefas anteriores). Observe que quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.
* Use a propriedade [Element.clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth) para pegar o tamanho dos discos.

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/tower-of-hanoi) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.**Adicione um comentário ao seu envio informando o nome do seu colega.**
