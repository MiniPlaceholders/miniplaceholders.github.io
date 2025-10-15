import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MiniPlaceholders',
  tagline: 'MiniMessage Component-based Placeholders API for Minecraft Platforms.',
  favicon: 'img/MiniPlaceholdersLogoMin.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://miniplaceholders.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MiniPlaceholders', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MiniPlaceholders/miniplaceholders.github.io/tree/main',
        },
        blog: false,//{
          //showReadingTime: true,
          //feedOptions: {
           // type: ['rss', 'atom'],
            //xslt: true,
          //},
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/MiniPlaceholders/docs',
          // Useful options to enforce blogging best practices
          //onInlineTags: 'warn',
          //onInlineAuthors: 'warn',
          //onUntruncatedBlogPosts: 'warn',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/MiniPlaceholdersBanner.webp',
    navbar: {
      title: 'MiniPlaceholders',
      logo: {
        alt: 'MiniPlaceholders Logo',
        src: 'img/miniplaceholders-logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: 'docs/category/user-guide',
          position: 'left',
          label: 'User Guide',
        },
        {
          to: 'docs/category/developer-guide',
          position: 'left',
          label: 'Dev Guide',
        },
        {
          href: 'https://github.com/MiniPlaceholders/MiniPlaceholders',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MiniPlaceholders/MiniPlaceholders',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/5NMMzK5mAn',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@4drian3d',
            },
          ],
        },
      ],
      copyright: `Copyright © 2022 - ${new Date().getFullYear()} MiniPlaceholders, Org. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'properties'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
