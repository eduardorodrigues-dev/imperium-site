# Imperium

Este repositório contém o código‑fonte do sítio web **Imperium**, um espaço editorial silencioso construído com o framework [Next.js](https://nextjs.org/) e conteúdo em MDX. O objectivo do projecto é proporcionar um ambiente contemplativo onde manifesto, obra, método e arquivo possam ser apresentados sem pressa, respeitando a ausência estratégica e o ritmo próprio de cada criação.

## Stack técnica

- **Next.js (App Router)** — estrutura React moderna, utilizando a pasta `app` para definir rotas e layouts.
- **TypeScript** — tipagem estática opcional para maior robustez.
- **MDX** — permite escrever conteúdo em Markdown com componentes React embutidos.
- **CSS com variáveis personalizadas** — define tokens de design (cores, tipografia, spacing, motion) sem usar bibliotecas pesadas.
- **IntersectionObserver** — animações de revelação discretas sem dependências externas; compatível com `prefers-reduced-motion`.
- **Deploy em Vercel** — hospedagem optimizada para aplicações Next.js.

## Instalação e scripts

Este projecto foi concebido para ser implantado em Vercel, que instalará automaticamente as dependências indicadas. Para executar localmente (requer Node.js e acesso ao registry npm):

```bash
npm install
npm run dev
```

Outros comandos útis:

- `npm run build` — compila a aplicação para produção.
- `npm run start` — serve a aplicação compilada.
- `npm run lint` — executa o linter.

## Princípios de design e conteúdo

- **Ausência estratégica:** onde há espaço em branco, há intenção. O site comunica mais pela omissão do que pela abundância.
- **Nada se move sem acção:** todas as animações são desencadeadas pelo scroll e respeitam o utilizador que prefere menos movimento.
- **Sem hype:** não existem contagens regressivas, benefícios em bullet points ou chamadas agressivas à acção. O tom é sereno e editorial.
- **Privacidade e simplicidade:** o formulário de e‑mail em `/acesso` é apenas uma interface; não guarda dados no momento. A integração com backend pode ser desenvolvida posteriormente.

## Estado actual

Todas as páginas existentes contêm texto placeholder denso e neutro em português. As animações de revelação e tokens de design foram configurados para transmitir a atmosfera de uma “catedral silenciosa”. Futuramente, quando o conteúdo final for fornecido, basta substituir os ficheiros `.mdx` na pasta `content/`.
