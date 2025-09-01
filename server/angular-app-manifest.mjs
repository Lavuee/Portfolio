
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Lavuee/Portfolio.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Lavuee/Portfolio.git/home",
    "route": "/Lavuee/Portfolio.git"
  },
  {
    "renderMode": 2,
    "route": "/Lavuee/Portfolio.git/home"
  },
  {
    "renderMode": 2,
    "route": "/Lavuee/Portfolio.git/about"
  },
  {
    "renderMode": 2,
    "route": "/Lavuee/Portfolio.git/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 777, hash: '234262253812e94db5591d00645dc6525f61a3c8b10c1676e440722f97fc4b95', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 993, hash: '80f4ba465734db6b3bd011116614be82c28eb74c5da91b8859206c1c3a2f69ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7970, hash: '1e2903884e4ba1d5af92513aab22ba4d297edf4fe06c7a74ea32ccd03e1a9ab1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5934, hash: '00f8d363c4e9c2780818948b9e6fa137cb67d850c0c95ee2f603ca04ee9f8229', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6273, hash: 'bbcea86ed5b0099888d7c8e6c8d466af2993dc8e93f00dd2932e3e7564c3e312', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'main-YV6YJYBG.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/main-YV6YJYBG_css.mjs').then(m => m.default)},
    'main.server.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-X7AQ3D4R.css': {size: 207, hash: '6RBgPP9VHBs', text: () => import('./assets-chunks/styles-X7AQ3D4R_css.mjs').then(m => m.default)}
  },
};
