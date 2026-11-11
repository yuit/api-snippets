# Mojaloop Developer Portal

The Mojaloop Developer Portal provides API references and interactive documentation for building interoperable, inclusive instant payment systems with Mojaloop. Built with the [Zudoku](https://zudoku.dev) documentation framework, it brings together architectural overviews, integration guides, and OpenAPI-driven references for Mojaloop services.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing documentation pages in `pages/` (such as `pages/introduction.mdx` or `pages/technical-overview.mdx`). The portal updates automatically as you save changes.

## Portal Structure

- **Documentation**:
  - `pages/introduction.mdx` — Overview of Mojaloop, the problems it solves, and core platform capabilities.
  - `pages/technical-overview.mdx` — Deep-dive into Mojaloop's microservices architecture, core services, transaction lifecycle (discovery, agreement, transfer), and security.
- **API Reference**: Configured in `zudoku.config.tsx` to serve interactive OpenAPI definitions for Mojaloop services from `../docs`.

## Learn More

- To learn more about Zudoku, visit the [Zudoku documentation](https://zudoku.dev/docs).