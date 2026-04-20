# Desafio Técnico — Landing Page Go Presence

Implementação de uma landing page responsiva baseada no layout disponibilizado no Figma para o desafio técnico.

## Objetivo

Desenvolver a interface da landing page com foco em:

- fidelidade visual ao layout proposto no Figma;
- responsividade para diferentes tamanhos de tela;
- organização e componentização do código.

## Preview

- [link do deploy](https://landing-page-videobrax-gopresence.vercel.app/)

<img width="1345" height="638" alt="image" src="https://github.com/user-attachments/assets/a80804ee-ed72-4d46-b8cb-48a8eaf1a9c3" />

## Tecnologias utilizadas

Este projeto foi desenvolvido com:

- React
- TypeScript
- Vite
- Sass (SCSS)
- Radix UI
- Lucide React

## Decisões de implementação

Foi utilizado React como biblioteca JavaScript para desenvolvimento da interface, contribuindo para uma estrutura mais componentizada e de fácil manutenção.

O SCSS foi adotado como pré-processador de CSS para auxiliar na organização e reutilização dos estilos, tornando a estilização mais consistente e escalável.

O Vite foi escolhido por proporcionar agilidade no ambiente de desenvolvimento, simplicidade na configuração do projeto e eficiência no processo de build.

### Principais pontos da implementação

- componentização por seções da landing page;
- estilização com **SCSS**;
- organização visual seguindo estrutura semelhante a **BEM** nas classes CSS;
- uso de `clamp()` para adaptação fluida de espaçamentos e tipografia;
- navegação mobile com menu em modal usando **Radix Dialog**;
- uso de fontes externas para maior proximidade visual com o layout;
- preocupação com semântica, responsividade e manutenção do código.

## Estrutura do projeto

```bash
src/
├── assets/
├── components/
│   ├── Button/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── IntroCard/
│   ├── LiveSection/
│   ├── MediaShowcase/
│   ├── OverviewSection/
│   └── Products/
├── pages/
├── styles/
│   ├── _globals.scss
│   ├── _mixins.scss
│   ├── _resets.scss
│   ├── _variables.scss
│   └── main.scss
├── App.tsx
└── main.tsx
```

# Organização da interface

- Header
- Hero
- IntroCard
- LiveSection
- OverviewSection
- Products
- MediaShowcase
- Footer

# SEO básico

- meta description;
- keywords;
- author;
- Open Graph;
- Twitter meta tags.

## Como executar o projeto

### Pré-requisitos

```bash
- Node.js
- npm
```

### Instalação

```bash
- npm install
```

### Rodar em ambiente de desenvolvimento

```bash
- npm run dev
```

### Gerar build de produção

```bash
- npm run build
```

### Visualizar build localmente

```bash
- npm run preview
```

### Scripts disponíveis

```bash
- npm run dev
- npm run build
- npm run preview
- npm run lint
```
