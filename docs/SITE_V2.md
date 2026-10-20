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

## Conteúdo alinhado ao currículo em 18 de outubro de 2026

- Inclusão de Inflow Sofá e Inflow Kids nos projetos e da passagem pela Inflow na experiência.
- Consolidação de Sofá na Caixa, Ecoflame Garden e Little Duck no mesmo vínculo, com datas do currículo.
- Descrição integral da entrega freelance da Casa Sol Outdoor e remoção de métricas provisórias.
- Currículo em PDF disponível na abertura e no contato, com LinkedIn canônico confirmado.
- Next.js, React e TypeScript apresentados com o escopo das duas páginas institucionais.
- Extensão ilustrativa retirada da seleção principal; base factual e exemplo do assistente atualizados.
- Diagramas explicativos para a Inflow, sem simular capturas das lojas.

Ainda podem complementar a apresentação: capturas históricas da Inflow autorizadas para exposição, evidências de desempenho e data do freelance. As alterações desta revisão são locais e não comprovam publicação.

### Revisão editorial da prévia

- Título profissional e apresentação alinhados ao briefing, com download do currículo na abertura e no contato.
- Projetos mantidos em grade: participação e entrega visíveis, detalhes proporcionais ao conteúdo disponível, com maior profundidade na Inflow Sofá.
- Conteúdo dos quatro projetos centralizado em `content/projects.json`, utilizado pela página e pela base enviada ao assistente.
- Experiências anteriores em design resumidas; visual do Sobre mim preservado.
- Diagramas da Inflow identificados como esquemas explicativos e links das lojas atuais contextualizados.

### Ajustes após a revisão do usuário

- Assistente restaurado na abertura, ao lado da apresentação no desktop e abaixo no celular, preservando o componente, o histórico e a animação existentes. A decisão explícita do usuário prevalece sobre a proposta de retirá-lo da abertura.
- Seção de projetos com o título simples “Projetos”, sem título promocional nem parágrafo de introdução.

Pendências para a próxima revisão: imagem da empresa Inflow a ser enviada pelo usuário, links e capturas autorizadas das lojas e eventuais evidências históricas de desempenho. Não criar métricas nem datas para preencher essas lacunas. O PDF fornecido contém telefone, que também ficará disponível no download público.

### Prévia de apresentação e chat separado

- Decisão posterior do usuário: preparar a primeira publicação sem chat, mantendo o recurso para desenvolvimento local. A abertura agora funciona sem a segunda coluna e sem apagar a implementação do assistente.
- `PORTFOLIO_CHAT_ENABLED=true` reativa o chat na abertura; sem essa opção, fica oculto e sua consulta ao provedor é bloqueada em produção. A chave continua sendo `CODE` e não foi alterada.
- `/previa/chat` permite continuar trabalhando no componente original durante `next dev`, sem mudar a página inicial. Essa rota retorna 404 em produção.
- `/previa/projetos` compara o mockup existente da Casa Sol com uma captura real da página de produto atual. A escolha visual ainda está em avaliação; as capas da página principal não foram substituídas. Essa rota também é restrita a desenvolvimento.
- Captura de referência obtida em 18/10/2026: `https://casasoloutdoor.com/products/duo-chaise-lounge`. A loja atual pode ter mudanças posteriores ao trabalho do autor; não utilizar a imagem como comprovação histórica sem revisão.
- Pendente: revisar o posicionamento da abertura para oportunidades além de Shopify. Proposta em discussão: “Desenvolvedor Front-end” como título e experiência em Shopify como especialidade, sem alegar experiência full-stack ou ampliar competências não demonstradas. O título permanece inalterado até a decisão.

Estas mudanças são locais; preparar a configuração não equivale a publicar na Vercel.

### Terceira opção de capa

- A comparação local passa a abrir na opção 3: notebook e celular com molduras discretas, telas maiores e menos margem externa. Os três formatos podem ser alternados na mesma largura de card, sem diminuir as imagens para caber em três colunas.
- O novo mockup é um componente de apresentação (`DeviceMockup`) com capturas reais de desktop e mobile da mesma página de produto da Casa Sol. As telas não foram redesenhadas nem geradas por IA. A captura mobile foi obtida em 18/10/2026, com viewport de 390 × 844.
- As capas da página inicial e a produção permanecem inalteradas nesta etapa. O mockup antigo continua disponível como opção 1 e o recorte direto como opção 2.

### Conjunto de quatro capas em avaliação

- `/previa/lojas`, restrita a desenvolvimento, apresenta as quatro lojas no mockup ampliado e centralizado. A comparação das três alternativas permanece em `/previa/projetos`.
- Capturas atuais obtidas em 18/10/2026: home de `https://inflowsofa.com.br/`, home de `https://sofanacaixa.com.br/` e produto `https://inflowkids.com.br/products/cama-montessoriana-infantil-sonhos-one-solteiro-verde?variant=53620041875824`. A Casa Sol mantém o produto já capturado.
- Desktop e mobile usam capturas reais. Banners rotativos podem estar em slides diferentes entre as capturas. As imagens não são evidência histórica da entrega.
- Os diagramas da Inflow aparecem nos detalhes somente nessa prévia. As capas e os dados da página principal não foram substituídos; não houve publicação.

### Capas aprovadas na página principal

- Após aprovação do usuário, os quatro mockups centralizados foram aplicados à seção Projetos da página principal local. As imagens e links agora são mantidos em `content/projects.json`, sem duplicar a seleção na prévia.
- Os diagramas da Inflow foram preservados dentro de “Detalhes da minha participação”. Textos, ordem, dimensões do mockup e demais seções permanecem como estavam.
- Os assets dos mockups anteriores e a comparação local foram preservados. Esta troca não inclui commit, push ou deploy na Vercel.

### Revisão de currículo e conteúdo — 20/10/2026

- O PDF recebido em 20/10 foi adotado como referência para datas e cargos. Grupo Ecoflame/Sofá na Caixa/Little Duck: 11/2023–09/2025; EBF: 04/2023–11/2023; Bureau: 06/2022–04/2023. Essas datas substituem registros anteriores. A experiência da Inflow mantém 09/2025–09/2026 e o cargo Desenvolvedor Web Pleno.
- A apresentação passa a usar Desenvolvedor Web | Shopify e E-commerce, preservando a descrição da atuação em front-end. A base factual do assistente acompanha as correções.
- Os dois botões “Baixar currículo (PDF)” apontam para `/curriculo-tone-revetler.pdf` e sugerem o nome `Curriculo-Tone-Revetler.pdf`.
- Por decisão expressa do usuário, Casa Sol Outdoor permanece apenas nos projetos do portfólio, sem data inventada; a seção de freelance foi removida do PDF de download. Todo o restante do texto, a tipografia e os quatro links foram preservados. O original recebido não foi alterado.
- Inglês permanece “em estudo na Fluency Academy”, sem atribuição de nível de proficiência. A graduação continua em andamento desde 2023, sem previsão de conclusão confirmada.
- A logo da Inflow já está aplicada na experiência profissional; não é mais uma pendência.
- Verificação: PDF de uma página renderizado e inspecionado, texto remanescente comparado integralmente com o original, quatro links preservados; downloads reais da abertura e do contato conferidos por SHA-256. Revisão visual desktop e mobile (390 × 844), testes de conteúdo, testes simulados do chat e TypeScript aprovados. Não houve chamada à API Gemini nem build de produção nesta revisão.
- Melhorias futuras: registrar evidências históricas de Core Web Vitals; identificar e apresentar ao menos uma das duas páginas profissionais React/Next.js/TypeScript; informar previsão de conclusão da graduação quando conhecida. Essas lacunas não exigem inventar informações nem impedem candidaturas compatíveis com a experiência atual.
- Revisão mantida localmente, sem commit, push ou deploy. Antes de compartilhar a atualização pública, publicar e verificar o PDF no domínio.

## Como voltar à versão anterior

A tag `site-v1-before-v2` preserva o código antigo. Não é necessário apagar commits nem forçar o histórico.

Para desfazer a Site V2 no repositório, abra o PR **Site V2 — atualização do portfólio** no GitHub e use **Revert**, quando disponível. Revise e faça o merge do PR de reversão. Alternativamente, crie uma branch a partir da `main` atual e execute `git revert -m 1 <SHA_DO_MERGE_SITE_V2>`, substituindo o marcador pelo commit de merge do PR; envie a reversão por um novo PR.

O revert desfaz as mudanças desse merge. Se houver alterações posteriores que dependam da V2, revise eventuais conflitos antes de integrar a reversão.

A atualização do site depende da integração e das configurações de deploy da Vercel. Restaurar um deploy pela Vercel e reverter o código no GitHub são ações distintas.

## Configuração do assistente

O servidor usa a variável `CODE`. O modelo pode ser definido por `GEMINI_MODEL`; sem essa variável, utiliza o padrão do código. Arquivos `.env` e chaves não devem ser enviados ao repositório.

O limite de requisições atual é mantido em memória por instância; ele não constitui um limite global distribuído na hospedagem serverless.
