# Teste Front-end da Convenia

## Importante 
 - Clareza e organização do código;
 - Uso avançado de HTML/CSS;
 - Alguma metodologia para organizar seu CSS (BEM, SMACSS, OOCSS, etc.);
 - Interface **bold** (leia: não precisa ficar lindo/maravilhoso, mas tem que funcionar perfeitamente);

## Extras 
  - HTML Semântico;
  - Javascript Design Patterns;
  - Pré/Pós processors de CSS (SASS, Less, Stylus, PostCSS, etc.);
  - Você deve entregar este teste com o stack inicial (`vue`, `vuex` e `axios`) mas sinta-se livre para adcionar quantas dependencias quiser;

## Teste

A empresa de telefonia DevTel está com uma nova promoção chamada FaleMais.

Essa promoção muda os valores pré-definidos na tabela de preço normal:

|origem|destino|$/min|
|:----:|:-----:|----:|
| 011  |  016  | 1.9 |
| 016  |  011  | 2.9 |
| 011  |  017  | 1.7 |
| 017  |  011  | 2.7 |
| 011  |  018  | 0.9 |
| 018  |  011  | 1.9 |

API: [https://private-979ab-testefrontend.apiary-mock.com/ddd/prices](https://private-979ab-testefrontend.apiary-mock.com/ddd/prices)

|ddd   |     cidade     |
|-----:|:---------------|
| 011  |   São Paulo    |
| 016  | Ribeirão Preto |
| 017  |   Mirassol     |
| 018  | Tupi Paulista  |

API: [https://private-979ab-testefrontend.apiary-mock.com/ddd/details](https://private-979ab-testefrontend.apiary-mock.com/ddd/details)

A promoção consiste em poder falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são:

|   planos   |tempo|
|:-----------|----:|
| FaleMais30 |  30 |
| FaleMais60 |  60 |
| FaleMais120| 120 |

API: [https://private-979ab-testefrontend.apiary-mock.com/ddd/plans](https://private-979ab-testefrontend.apiary-mock.com/ddd/plans)


A DevTel quer uma ferramenta onde o cliente possa calcular o valor da ligação. O cliente deve escolher os códigos das cidades de origem e destino e informar o tempo da ligação em minutos. Será apresentado para ele uma tabela comparando os planos FaleMais bem como sem plano algum. Não existe custo inicial para a aquisição do plano.

### Exemplo de valores:

|origem|destino|tempo|promoção|com promoção|sem promoção|
|:----:|:-----:|:---:|:-------|-----------:|-----------:|
|011|016|20|FaleMais 30|R$ 0,00|R$ 38,00|
|011|017|80|FaleMais 60|R$ 37,40|R$ 136,00|
|018|011|200|FaleMais 120|R$ 167,20|R$ 380,00|
|018|017|100|FaleMais 30|-|-|


## Wireframe

### Início

![Início](http://i.imgur.com/5uKmnG8.png)

### Input válido

![Válido](http://i.imgur.com/FcX7ttH.png)

### Input inválido

![Inválido](http://i.imgur.com/9h2rTF6.png)



## Comandos do teste

Requisitos:
- `node >= 4.0.0`
- `npm >= 3.0.0`

Após clonar esse repo na sua máquina use os seguintes comandos:

``` bash
# Intala todas as dependencias do teste
npm install

# Serve o teste com hot reload em localhost:8080
npm run dev

# Build para produção
npm run build

# Build para produção com análize
npm run build --report
```

Se você nunca trabalhou com vue ou webpack acesse o [guia](http://vuejs-templates.github.io/webpack/) e a [documentação do vue-loader](http://vuejs.github.io/vue-loader).