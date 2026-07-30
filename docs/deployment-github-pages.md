# Deploy no GitHub Pages

## Pré-requisitos

- Repositório GitHub com o nome `grimorios-arcana`.
- Branch principal publicada no GitHub.
- Permissão de escrita no repositório para a publicação da branch `gh-pages`.

## Publicação manual

```bash
npm ci
npm run deploy:pages
```

O comando gera a aplicação com `base href` `/grimorios-arcana/` e usa `angular-cli-ghpages` para publicar `dist/grimorios-arcana/browser` na branch `gh-pages`.

## Publicação automatizada

O workflow em `.github/workflows/deploy-pages.yml` executa build e publicação a cada push na branch principal.

Depois do primeiro deploy, habilite o Pages em `Settings → Pages` com:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Pasta:** `/ (root)`

O workflow publica na branch `gh-pages`; portanto, a opção “GitHub Actions” não é a fonte correta para esta configuração atual.

## Checklist pós-publicação

- Abrir a URL do Pages.
- Recarregar a rota inicial.
- Criar um personagem.
- Salvar e recarregar a página.
- Exportar o JSON.
- Testar em tela estreita.
