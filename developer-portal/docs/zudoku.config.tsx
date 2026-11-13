import type { ReactNode } from "react";
import type { ZudokuConfig } from "zudoku";
import { Callout } from "zudoku/components";
import { NotFound } from "./src/NotFound";

const metadata: ZudokuConfig["metadata"] = {
  favicon:
    "https://mojaloop.io/wp-content/uploads/2025/04/cropped-cropped-mojaloop_favicon-32x32.png",
  title: "%s | Mojaloop Foundation",
  defaultTitle: "Mojaloop Foundation",
  description: "Open Source Inclusive Instant Payment System",
};

const apis: ZudokuConfig["apis"] = [
  {
    type: "file",
    input: "./apis/thirdparty-v2.0-payment-initiation-snippets.yaml",
    path: "api-3ppi",
  },
  {
    type: "file",
    input: "./apis/thirdparty-v2.0-admin-snippets.yaml",
    path: "api-3ppa",
  },
  {
    type: "file",
    input: "./apis/thirdparty-v1.0-openapi3-snippets.yaml",
    path: "api-thirdparty-v1.0",
  },
  {
    type: "file",
    input: "./apis/fspiop-rest-v1.1-openapi3-snippets.yaml",
    path: "api-fspiop-v1.1",
  },
  {
    type: "file",
    input: "./apis/fspiop-rest-v2.0-openapi3-snippets.yaml",
    path: "api-fspiop-v2.0",
  },
  {
    type: "file",
    input: "./apis/fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml",
    path: "api-fspiop-v2.0-iso20022",
  },
];

const docs: ZudokuConfig["docs"] = {
  publishMarkdown: true,
  contentNegotiation: true,
  llms: {
    files: "pages/**/*.{md,mdx}",
    llmsTxt: true,
    llmsTxtFull: true,
    title: "Mojaloop  Developer Platform",
    description:
      "Open source financial infrastructure for building an inclusive instant payment system",
    instructions:
      "This is the Mojaloop Developer Platform. You can use this platform to explore the Mojaloop APIs, read the documentation, and learn how to integrate with Mojaloop.",
  },
};

const site: ZudokuConfig["site"] = {
  sidebar: {
    togglePosition: "center",
    toggleVisibility: "hover",
  },
  notFoundPage: <NotFound />,
  logo: {
    src: {
      light: "https://docs.mojaloop.io/mojaloop_logo_med.png",
      dark: "https://docs.mojaloop.io/mojaloop_logo_med.png",
    },
    width: 160,
    height: 40,
    alt: "Mojaloop Foundation",
  },
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "https://zudoku.dev" },
          {
            label: "Docs",
            href: "https://zudoku.dev/docs/?utm_source=cosmo-cargo",
          },
        ],
      },
      {
        title: "Foundation",
        links: [
          { label: "About", href: "https://mojaloop.io/foundation/mission/" },
          { label: "Blog", href: "https://mojaloop.io/category/blog/" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "API Reference", href: "/" },
          { label: "Support", href: "/" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/" },
          { label: "Terms", href: "/" },
          { label: "Security", href: "/" },
        ],
      },
    ],
    social: [
      {
        href: "https://github.com/mojaloop/",
        icon: "github",
      },
    ],
    copyright: `© ${new Date().getFullYear()} Mojaloop Foundation. All rights reserved.`,
  },
};

const navigation: ZudokuConfig["navigation"] = [
  {
    type: "category",
    label: "Documentation",
    icon: "book-open",
    items: [
      { type: "filter", placeholder: "Filter documentation" },
      {
        type: "category",
        icon: "infinity",
        collapsed: false,
        label: "About Mojaloop",
        items: ["introduction", "architecture-overview"],
      },
      { type: "separator" },
      {
        type: "category",
        icon:  "library-big",
        label: "API Reference",
        items: [
          {
            type: "link",
            label: "FSPIOP API",
            icon: "arrow-left-right",
            to: "/fspiop-api",
          },
          {
            type: "link",
            label: "Thirdparty API",
            icon: "user-round-group",
            to: "/thirdparty-api",
          }
        ],
      },
    ],
  },
  {
    type: "category",
    label: "FSPIOP API",
    icon: "arrow-left-right",
    items: [
      "fspiop-api",
      { type: "separator" },
      { type: "doc", file: "fspiop/terms", icon: "book-a" },
    ],
  },
  {
    type: "category",
    label: "Thirdparty API",
    icon: "user-round-group",
    items: [
      "thirdparty-api",
      { type: "separator" },
      { type: "doc", file: "thirdparty/terms", icon: "book-a" },
    ],
  },
];

const defaults: ZudokuConfig["defaults"] = {
  apis: {
    examplesLanguage: "js",
    schemaDownload: {
      enabled: true,
      fileName: "openapi",
    },
  },
};

const search: ZudokuConfig["search"] = {
  type: "pagefind",
};

const theme: ZudokuConfig["theme"] = {
  light: {
    background: "#ffffff",
    foreground: "#211236",
    card: "#ffffff",
    cardForeground: "#211236",
    popover: "#ffffff",
    popoverForeground: "#211236",
    primary: "#544ed2",
    primaryForeground: "#ffffff",
    secondary: "#f0effc",
    secondaryForeground: "#544ed2",
    muted: "#f5f4fb",
    mutedForeground: "#6b6882",
    accent: "#f0effc",
    accentForeground: "#544ed2",
    destructive: "#d63a0c",
    destructiveForeground: "#ffffff",
    border: "#e4e2f0",
    input: "#e4e2f0",
    ring: "#544ed2",
    radius: "0.4rem",
  },
  dark: {
    background: "#141218",
    foreground: "#f0edf6",
    card: "#1d1829",
    cardForeground: "#f0edf6",
    popover: "#1d1829",
    popoverForeground: "#f0edf6",
    primary: "#7d75f7",
    primaryForeground: "#141218",
    secondary: "#2a2440",
    secondaryForeground: "#f0edf6",
    muted: "#211c33",
    mutedForeground: "#9f9ab5",
    accent: "#2a2440",
    accentForeground: "#5ae0e2",
    destructive: "#ff8560",
    destructiveForeground: "#141218",
    border: "#2e2744",
    input: "#2e2744",
    ring: "#7d75f7",
    radius: "0.4rem",
  },
  customCss: `
      :root {
        --color-primary: #544ed2;
        --color-primary-hover: #433dbb;
        --color-on-primary: #ffffff;
        --color-cta: #d63a0c;
        --color-cta-hover: #b83108;
        --color-on-cta: #ffffff;
        --color-cta-text: #b83108;
        --orange-faint: #fef0ec;
        --color-nav-hover: #d63a0c;
        --color-success-text: #2e7a43;
        --color-accent-teal: #0a6d70;
        --color-accent-teal-text: #0a6d70;
        --color-lime-text: #5c6500;
        --color-placeholder: #6b7280;
        --color-gradient-start: #544ed2;
        --color-gradient-end: #0a6d70;
        --color-hero-gradient-end: #0e6f72;
        --shadow-sm: 0 1px 3px rgba(33, 18, 54, 0.06);
        --shadow-md: 0 4px 12px rgba(33, 18, 54, 0.09);
      }
      .dark {
        --color-accent-teal: #5ae0e2;
        --color-gradient-start: #4a2090;
        --color-gradient-end: #5ae0e2;
        --color-hero-gradient-end: #0b5f61;
        --color-on-primary: #141218;
        --color-on-cta: #141218;
        --color-cta-text: #ff8560;
        --orange-faint: #2e1a14;
        --color-success-text: #7dd494;
        --color-accent-teal-text: #5ae0e2;
        --color-lime-text: #d5df63;
        --purple-faint: #2a2440;
        --green-faint: #1a2e20;
      }
    `,
};

const config: ZudokuConfig = {
  metadata,
  docs,
  site,
  navigation,
  defaults,
  search,
  apis,
  theme,
  redirects: [
    { from: "/", to: "/introduction" },
  ],
};

export default config;
