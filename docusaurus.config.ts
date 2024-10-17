import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {

  title: 'Union Docs',
  tagline: 'Payment Transfer Service',
  url: 'https://.github.com',
  baseUrl: '/union-docs/', // Projenizin repository adı.
  organizationName: 'SurPay',
  projectName:'union-docs',
  deploymentBranch:'gh-pages',

 
 
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SurPayTech/union-docs/edit/main/',
          /* sidebarPath: './sidebars.ts', */
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
         /*  customCss: './src/css/custom.css', */
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
