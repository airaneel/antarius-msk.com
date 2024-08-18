import { defineConfig } from "astro/config"
import purgecss from "astro-purgecss"
import node from "@astrojs/node"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	build: {
		format: "file",
		assets: "assets"
	},
	integrations: [
		icon(),
		purgecss()
	],
	output: "hybrid",
	adapter: node({
		mode: "standalone"
	}),
	vite: {
		css: {
			devSourcemap: true
		},
		server: {
			proxy: {
				"/api": {
					target: "https://webdev.raidmen.ru",
					changeOrigin: true
				}
			}
		}
	}
})
