import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: isGitHubPages ? 'https://between2d.github.io' : undefined,
  base: isGitHubPages ? '/littlelink' : '/',
  vite: {
    build: { target: 'es2022' },
  },
});
