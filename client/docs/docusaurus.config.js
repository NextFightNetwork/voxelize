// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

const sharedTypeDocConfig = (name) => ({
  excludePrivate: true,
  excludeProtected: true,
  entryDocument: "none",
  disableSources: true,
  sort: ["source-order", "alphabetical"],
  categorizeByGroup: true,
  sidebar: {
    fullNames: false,
    categoryLabel: name,
    indexLabel: undefined,
    readmeLabel: "Readme",
    position: null,
    autoConfiguration: true,
  },
  plugin: ["typedoc-plugin-no-inherit"],
  watch: process.env.TYPEDOC_WATCH,
  preserveWatchOutput: true,
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Voxelize",
  tagline: "A god damn voxel sandbox",
  url: "https://docs.voxelize.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo/logo_circle-min.png",
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "voxelize",
  projectName: "voxelize",
  trailingSlash: false,

  // Even if you don't use nternalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Voxelize",
        logo: {
          alt: "Voxelize Logo",
          src: "img/logo/logo_circle-min.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro/what-is-voxelize",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/shaoruu/voxelize",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro/what-is-voxelize",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/voxelize",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/shaoruu/voxelize",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Voxelize, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["toml", "rust"],
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../../transport/src/index.ts"],
        id: "@voxelize/transport",
        out: "transport",
        tsconfig: "../../transport/tsconfig.json",
        ...sharedTypeDocConfig("Transport API"),
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../src/index.ts"],
        id: "@voxelize/client",
        tsconfig: "../tsconfig.json",
        ...sharedTypeDocConfig("Client API"),
      },
    ],
  ],
};

module.exports = config;
