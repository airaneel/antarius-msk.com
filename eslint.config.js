// @ts-check
import eslintPluginAstro from "eslint-plugin-astro"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

/**
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,

	{
		ignores: ["node_modules/", "dist/", "build/", "vendor/", "utils/*"],
		rules: {
            
			"no-console.log": "off",
			"no-console": "off"
		}
	}
]

export default config
