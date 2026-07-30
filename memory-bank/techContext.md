# Tech Context — Grimórios de Arcana

## Stack-alvo

- Angular para a aplicação web.
- TypeScript.
- HTML/CSS ou SCSS para interface.
- GitHub Pages como hospedagem inicial.
- Publicação automatizada via Angular gh pages, conforme a ferramenta escolhida no setup.

## Restrições de hospedagem

- Aplicação estática deve funcionar sem servidor próprio.
- É necessário configurar o `base href` compatível com o nome do repositório.
- Navegação com Angular Router precisa de estratégia compatível com refresh direto no GitHub Pages.
- Segredos e dados sensíveis não devem ser colocados no bundle público.

## Verificações técnicas obrigatórias

- build de produção;
- lint e testes unitários essenciais;
- teste de navegação em ambiente publicado;
- conferência de responsividade;
- validação do fluxo de deploy em um repositório de teste ou no repositório final.

## Decisões futuras

- versão do Angular e Node suportadas;
- ferramenta exata de deploy (`angular-cli-ghpages` ou alternativa equivalente);
- necessidade de PWA/offline;
- armazenamento local e formato de exportação/importação de personagens;
- eventual backend e autenticação.
