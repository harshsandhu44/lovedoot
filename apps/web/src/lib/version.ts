import pkg from '../../package.json';

export const APP_VERSION = pkg.version;
export const APP_COMMIT = process.env.VERCEL_GIT_COMMIT_SHA ?? 'dev';
