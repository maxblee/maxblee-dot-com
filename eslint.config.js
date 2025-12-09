// @ts-check
//
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

import eslint from '@eslint/js';

const cfg = defineConfig([
	globalIgnores(['dist/**/*']),
	eslintConfigPrettier,
	eslint.configs.recommended,
	tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
]);

export default cfg;
