# Site V2 — atualização do portfólio

## Referências de versão

- `site-v1-before-v2`: versão da `main` anterior a esta atualização, no commit `16615bd64d7e51dc8c03f622c4bb04cd2ece5bf9`.
- `site-v2`: versão resultante do merge do PR **Site V2 — atualização do portfólio**.
- Branch de desenvolvimento: `codex/site-v2`.

## Mudanças

- Apresentação voltada à experiência front-end em Shopify e Liquid, com assistente na abertura.
- Grade de lojas com participação, tecnologias e detalhes de cada projeto.
- Seção de ferramentas com representação provisória da extensão de transcrição e geração de prompts.
- Experiência profissional com acordeão acessível, animação discreta e suporte a movimento reduzido.
- Revisão do Sobre mim, navegação, logo SVG e contato com e-mail, LinkedIn, GitHub e espaço para currículo.
- Melhorias de validação, timeout e tratamento de erros do chat; chave de API mantida no servidor.
- Atualização de dependências e ajustes nas verificações de código.

## Conteúdo pendente

- Revisar datas, vínculos, responsabilidades e dados usados pelo assistente.
- Substituir indicadores `XX` por resultados comprovados ou remover os indicadores.
- Substituir o exemplo ilustrativo da extensão por título, interface, tecnologias e informações reais.
- Adicionar o currículo em PDF e habilitar o link correspondente.

## Como voltar à versão anterior

A tag `site-v1-before-v2` preserva o código antigo. Não é necessário apagar commits nem forçar o histórico.

Para desfazer a Site V2 no repositório, abra o PR **Site V2 — atualização do portfólio** no GitHub e use **Revert**, quando disponível. Revise e faça o merge do PR de reversão. Alternativamente, crie uma branch a partir da `main` atual e execute `git revert -m 1 <SHA_DO_MERGE_SITE_V2>`, substituindo o marcador pelo commit de merge do PR; envie a reversão por um novo PR.

O revert desfaz as mudanças desse merge. Se houver alterações posteriores que dependam da V2, revise eventuais conflitos antes de integrar a reversão.

A atualização do site depende da integração e das configurações de deploy da Vercel. Restaurar um deploy pela Vercel e reverter o código no GitHub são ações distintas.

## Configuração do assistente

O servidor usa `GEMINI_API_KEY`, com compatibilidade com a variável legada `CODE`. Configure a variável no ambiente de hospedagem. Arquivos `.env` e chaves não devem ser enviados ao repositório.

O limite de requisições atual é mantido em memória por instância; ele não constitui um limite global distribuído na hospedagem serverless.
