# Desafio - Leadster

Desenvolver uma landing page em NextJS

## Descrição

O desafio proposto pela Leadster consistia em desenvolver uma landing page com NextJS. Todo o material necessário para usar na criação (imagem e fonte) foi entregue por meio de um arquivo .zip. Como guia foi disponibilizado uma imagem png contendo o design final do site.

A lp consistia basicamente em um site com header, nav e footer e tinha o objetivo principal a reprodução de vídeos.

## Instalação

Antes de iniciar o projeto será necessário instalar todas as dependências.

Comandos de instalação:

```bash
npm i
# ou
yarn

```

Obs: a versão do Node que foi utilizado no desenvolvimento do código é v16.15.1

## Uso

Depois de instalar todos os pacotes, para iniciar a aplicação basta rodar um dos códigos abaixo no seu terminal:

```bash
npm run dev
# ou
yarn dev
```

## Estrutura de Arquivos

Dentro de src contém 5 pastas e um arquivo .json.

-app: na pasta app tem a estrutura central do projeto. Como o desafio foi feito na nova versão do NextJS, aqui contém todas as rotas (incluindo a rota 'home') o arquivo de estilização global, o favicon e o layout principal (utilizado em todas as rotas da lp)

-components: essa pasta foi criada para receber todos os componentes usados no site junto com os seus arquivos de estilo. Componentes mais genéricos são guardados dentro da pasta common.

-interfaces: como foi utilizado o TypeScript neste desafio, esta pasta foi criada com o objetivo de englobar todos os futuros arquivos de interface do projeto.

-lib: essa pasta foi criada com o único objetivo de armazenar o registry.tsx . Este componente serve basicamente para coletar todos os estilos CSS gerados na hora da rendenrização e injetar dentro do <head> no layout root. 

-reducers: a pasta reducers serve para armazenar todos os arquivos de reducer. (tanto o arquivo 'interfaces' quanto 'reducers' foi pensado numa organização futura do código)

-infos-mock.json: aqui se encontra todos os dados fictícios utilizados na aplicação. (obs: os arquivos utilizados nos downloads estão dentro da pasta public/files)


## Desafios e Aprendizados

Aprendizados: foi muito divertido desenvolver essa aplicação pois consegui colocar em prática muitas coisas que eu não utilizava há um bom tempo como styled component. Junto a isso também foi possível desenvolver e estudar ao mesmo tempo com o novo NextJS e sua estrutura de pastas.

Desafios: o maior desafio encontrado durante a escrita do código foi replicar da maneira mais fiel possível o design final. Depois de me acostumar a desenvolver olhando protótipos no figma, desenvolver olhando uma imagem png não foi fácil. Para me auxiliar nessa questão eu utilizei muitos dos estilos que eu encontrei no próprio site na Leadster, já que algumas partes eram parecidas.

## Autor

Diego Rafael