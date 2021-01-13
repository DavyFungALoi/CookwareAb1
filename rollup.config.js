import babel from "@rollup/plugin-babel";
import less from "rollup-plugin-less";
import replace from "rollup-plugin-replace";
import serve from "rollup-plugin-serve";
import dotenv from "dotenv";
import { eslint } from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

dotenv.config();

const config = {
  input: "src/test.js",
  output: {
    file: "dist/main.js",
    format: "iife",
  },
  external: [ 'debug' ],

  plugins: [
    process.env.NODE_ENV === "development" &&
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }), 
    process.env.NODE_ENV === "development" && commonjs(),
    eslint({
      exclude: ["src/styles/**"],
    }),
    babel({ babelHelpers: "bundled" }),
    less({
      include: ["src/styles/**/*.less"],
      output: "dist/style.css", 
      option: {
        globalVars: {
          container: process.env.EXP_NAME,
          loaded: process.env.EXP_NAME+"_L",
        },
      },
    }),
    replace({
      exclude: "node_modules/**",
      ENV: JSON.stringify(process.env.NODE_ENV || "development"),
      EXP_NAME: process.env.EXP_NAME,
      EXP_LOADED: process.env.EXP_NAME+"_L",
    }),
    serve("dist"),
  ],
};

export default config;
