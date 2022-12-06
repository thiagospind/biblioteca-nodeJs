# Verificador de links em Markdown
> Biblioteca desenvolvida em node.js que busca por links em arquivos Markdown (.md) e os testa, retornando códigos HTTP.

## Instalação

```sh
npm install -g verifica-links-md
```

## Exemplo de uso

Você pode pode listar o conteúdo dos arquivos com o comando:
```sh
npm run cli './caminho dos arquivos/'
```
Ou pode listar o conteudo de um único arquivo:
```sh
npm run cli './caminho dos arquivos/arquivo.md'
```
Para validar os arquivos, basta incluir a flag -- --validar:
```sh
npm run cli './caminho dos arquivos/' -- --validar
```
Ou pode validar o conteudo de um único arquivo:
```sh
npm run cli './caminho dos arquivos/arquivo.md' -- --validar
```

## Pré Requisitos
* Node.js v18.12.1
* NPM 8.19.1

# Dependências
* Chalk 5.0.1

## Histórico de lançamentos

* 1.0.0
    * Lançamento da primeira versão

## Meta

Thiago Bogoni Spindola – thiago_spdvr@hotmail.com
[Github](https://github.com/thiagospind/biblioteca-nodeJs.git)
[LinkedIn](https://www.linkedin.com/in/thiago-spindola-bb109220/)

## Contribuindo

1. Faça o _fork_ do projeto (<https://github.com/thiagospind/biblioteca-nodeJs/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki