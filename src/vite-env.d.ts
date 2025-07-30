/// <reference types="vite/client" />

// // в vite работает import  из .module.scss и без этого
// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  // другие переменные...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
