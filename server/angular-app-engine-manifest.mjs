
export default {
  basePath: 'https://github.com/Lavuee/Portfolio.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
