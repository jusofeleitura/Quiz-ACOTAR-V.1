# Quiz ACOTAR — Beta 1

Quiz do Se Liga na Leitura para descobrir uma das sete Cortes de Prythian.
Versão web baseada no Alpha aprovado. A versão não é exibida ao participante.

## Conteúdo do repositório

- `index.html`: página inicial.
- `assets/quiz.css` e `assets/quiz.js`: apresentação e comportamento.
- `assets/*.png`: sete paisagens e logos fornecidas para o projeto.
- `tests/quiz.test.cjs`: verificações da lógica e da pergunta especial.
- `.github/workflows/check.yml`: verificação automática do JavaScript e dos cálculos.
- `CHANGELOG.md`: histórico Alpha e Beta 1.
- `VERSION`: identificador da versão.
- `ALPHA-SNAPSHOT.json`: identificação e hashes da base histórica.

## Executar localmente

Abra `index.html` no navegador. Para conferir com um servidor local, com Python
instalado, execute na pasta do projeto:

```sh
python -m http.server 8000
```

Acesse http://localhost:8000. Não há instalação de dependências ou compilação.

## Subir no GitHub

Crie um repositório e envie **todo o conteúdo desta pasta**, incluindo `.github`
e `.gitignore`. O `index.html` deve ficar na raiz, ao lado de `assets`.
Também é possível usar Git, com o endereço do seu repositório:

```sh
git init
git add .
git commit -m "Adicionar Quiz ACOTAR Beta 1"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

O envio ao GitHub não publica o site por si só. Para hospedá-lo, use GitHub Pages
com publicação a partir da raiz da branch escolhida, ou envie `index.html` e
`assets` a outra hospedagem estática. O arquivo `.nojekyll` está incluído para
publicação estática. Não é necessário enviar os arquivos de teste ou documentação
a uma hospedagem manual. Não há domínio, credenciais ou publicação configurados.

## Verificar

Com Node.js 20 ou superior, execute na raiz:

```sh
node --check assets/quiz.js
node tests/quiz.test.cjs
```

O teste compara 100 mil combinações com um cálculo independente, cobre as quatro
etapas de decisão, os sete resultados, reinício e exibição filtrada do desempate.
Não substitui a conferência visual. Antes da divulgação, valide no celular e no
computador: navegação, Voltar, alternativas, imagens, resultado e Refazer quiz.

## Regras preservadas

São dez perguntas, cinquenta alternativas e sete resultados. A maior pontuação
vence. Em caso de empate, aplicam-se, nesta ordem:

1. Pontuação recebida na pergunta 8 entre as Cortes ainda empatadas.
2. Quantidade de alternativas escolhidas que concederam +2 a cada Corte empatada.
3. Pergunta especial sobre o sacrifício para selar a fenda mágica de Prythian.

A pergunta especial mostra apenas as alternativas das Cortes ainda empatadas,
sem identificá-las. A escolha determina o resultado diretamente, sem somar pontos.
A ordem de referência é Outonal, Noturna, Estival, Diurna, Primaveril, Invernal,
Crepuscular; as opções visíveis são reidentificadas sequencialmente.

## Escopo da Beta 1

Não coleta contatos nem envia respostas. Não inclui banco de dados, analytics,
integração com RD Station ou salvamento após recarregar a página. A integração
com a plataforma de destino será validada separadamente. O JavaScript usa eventos
inline, que exigem adaptação caso a hospedagem imponha uma CSP que os bloqueie.
As imagens originais foram mantidas; os arquivos pesam aproximadamente 22 MB.

## Histórico e materiais

O Alpha foi preservado separadamente em `quiz-acotar-alpha-historico.zip`.
O manifesto identifica a base exata usada nesta Beta. O Alpha não é duplicado no
repositório para evitar duas versões navegáveis e imagens repetidas.
Os textos, imagens e marcas foram fornecidos para este projeto; nenhuma licença
de redistribuição foi acrescentada. Defina a visibilidade do repositório conforme
a autorização para divulgar esses materiais.
