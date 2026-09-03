import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import base from './base.js';

/** Shared flat config for Next.js apps. */
export default [
  ...base,
  ...nextVitals,
  ...nextTs,
  // eslint-plugin-react 7.37.5 crashes on ESLint 10's version-detect path; pin it explicitly.
  { settings: { react: { version: '19.2' } } },
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'] },
];
