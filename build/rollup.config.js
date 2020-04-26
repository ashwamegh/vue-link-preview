// rollup.config.js

import vue from "rollup-plugin-vue";
import buble from '@rollup/plugin-buble';
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from "rollup-plugin-terser";
import minimist from "minimist";
import cleanup from 'rollup-plugin-cleanup';

const argv = minimist(process.argv.slice(2));

const config = {
  input: "src/main.js",
  output: {
    name: "VueLinkPreview",
    exports: "named"
  },
  exclude: 'node_modules/**',
  plugins: [
	vue({
		css: true,
		compileTemplate: true,
		template: {
		  isProduction: true
		}
	  }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
	}),
	resolve(),
	peerDepsExternal(),
    commonjs(),
	buble(),
	cleanup({
		comments: true,
	}),
	terser()
  ]
};

// // Only minify browser (iife) version
// if (argv.format === "iife") {
//   config.plugins.push(terser());
// }

export default config;

