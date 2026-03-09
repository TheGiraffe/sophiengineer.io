// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://thegiraffe.github.io',
    base: '/sophiengineer.io',
    integrations: [
        sanity({
            projectId: "ud7ejusl",
            dataset: "production",
            useCdn: false, // for static builds
        })
        , react()]
});