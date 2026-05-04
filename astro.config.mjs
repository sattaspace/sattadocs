// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.sattaspace.com',

    integrations: [
      starlight({
          title: 'SattaDocs',
         editLink: {
            baseUrl: 'https://github.com/sattaspace/sattadocs/edit/main/dcos/',
        },
        lastUpdated:true,
          customCss: [
            // Path to your Tailwind base styles:
            './src/styles/global.css',
        ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sattaspace/sattadocs' }],
          sidebar: [
            //   {
            //       label: 'Guides',
            //       items: [
            //           // Each item here is one entry in the navigation menu.
            //           { label: 'Example Guide', slug: 'guides/example' },
            //       ],
            //   },
            //   {
            //       label: 'Reference',
            //       autogenerate: { directory: 'reference' },
            //   },
              {
                  label: 'SattaBase',
                  autogenerate: { directory: 'sattabase' },
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});