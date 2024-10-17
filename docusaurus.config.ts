import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Union',
  tagline: 'Payment Transfer Service',
 // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://union-uat.ist-pay.com/docs',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SurPay', // Usually your GitHub org/user name.
  // projectName: 'union-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    mermaid: {
      options: {
        maxTextSize: 5000,
      },
    },
    image: 'img/union.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Union Logo',
        src: 'img/union.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
         {
           href: 'https://www.ist-pay.com/',
           label: 'Ist-Pay',
           position: 'right',
         },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Union - IstPay`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
