import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };

// 字符串中的链接符转为驼峰
function toCamel(str) {
  return str.replace(/-(.{1})/g, (m, p1) => {
    return /[a-z]/.test(p1) ? p1.toUpperCase() : p1;
  });
}

const globalVarName = toCamel(pkg.name);

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `dist/${pkg.name}.es.js`,
      format: 'es'
    },
    {
      file: `dist/${pkg.name}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `dist/${pkg.name}.umd.js`,
      format: 'umd',
      name: globalVarName,
      plugins: [terser()]
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json'
    })
  ]
};
