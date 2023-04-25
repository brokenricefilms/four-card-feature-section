import { defineConfig } from 'astro/config';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://four-card-feature-section.thuanowa.com/",
  integrations: [compress()],
});
