import { defineConfig } from "astro/config";

export default defineConfig({
  // Si tu déploies sur https://ton-pseudo.github.io/nom-du-repo/,
  // décommente et adapte la ligne suivante :
  // base: "/nom-du-repo",
  server: {
    host: true, // équivalent de --host, utile pour Docker
  },
});
