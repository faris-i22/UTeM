importScripts('lib/workbox/workbox-sw.js');
workbox.precaching.precacheAndRoute([
  {
    "url": "css/style.css",
    "revision": "3cf07bd1b9f9b2bdf9ae7cdf8018782b"
  },
  {
    "url": "cube.html",
    "revision": "2516408803a4305fe45910b2fe13bfb7"
  },
  {
    "url": "lib/workbox/workbox-background-sync.dev.js",
    "revision": "5446355eef3aa184b5b6eebfcd81f8d9"
  },
  {
    "url": "lib/workbox/workbox-background-sync.prod.js",
    "revision": "1ffcc362312a9e8ef4e28280ace2a1bd"
  },
  {
    "url": "lib/workbox/workbox-broadcast-update.dev.js",
    "revision": "0508d13784c9b0549663f40e3fe55d37"
  },
  {
    "url": "lib/workbox/workbox-broadcast-update.prod.js",
    "revision": "ee27c0fdc836f6a2dc656b25a680f9e4"
  },
  {
    "url": "lib/workbox/workbox-cacheable-response.dev.js",
    "revision": "ecba3679d285394f1c9e219681662721"
  },
  {
    "url": "lib/workbox/workbox-cacheable-response.prod.js",
    "revision": "a38e8afa80070ec9dff5dc2fb116f1c2"
  },
  {
    "url": "lib/workbox/workbox-core.dev.js",
    "revision": "2912182ccc99b017a8c36802cf9d983f"
  },
  {
    "url": "lib/workbox/workbox-core.prod.js",
    "revision": "5d14d8267f65030735589e4b664ee3bf"
  },
  {
    "url": "lib/workbox/workbox-expiration.dev.js",
    "revision": "43c236fe62480f042c35e8b898ca3367"
  },
  {
    "url": "lib/workbox/workbox-expiration.prod.js",
    "revision": "a767f3bbd2773a0bea34ff841b51ab64"
  },
  {
    "url": "lib/workbox/workbox-navigation-preload.dev.js",
    "revision": "a8f30e409f7037906053acec7d709beb"
  },
  {
    "url": "lib/workbox/workbox-navigation-preload.prod.js",
    "revision": "e2b19a3eda50f48ce7fc48640a523353"
  },
  {
    "url": "lib/workbox/workbox-offline-ga.dev.js",
    "revision": "3fba0947d12d42834b81499fafc76e82"
  },
  {
    "url": "lib/workbox/workbox-offline-ga.prod.js",
    "revision": "6af4fb51a5249c4e0ed7bc61ed59836d"
  },
  {
    "url": "lib/workbox/workbox-precaching.dev.js",
    "revision": "8fbbefcd70c998a3cd35f02e6a8ac4e7"
  },
  {
    "url": "lib/workbox/workbox-precaching.prod.js",
    "revision": "e8f5c57430ec7c448d30015ff4bd5896"
  },
  {
    "url": "lib/workbox/workbox-range-requests.dev.js",
    "revision": "0f15c57cf5c75cc72b6f23ad28a941d1"
  },
  {
    "url": "lib/workbox/workbox-range-requests.prod.js",
    "revision": "97c430406d13f4b91c805594ef351261"
  },
  {
    "url": "lib/workbox/workbox-routing.dev.js",
    "revision": "471b8e0f45e6e5e679d04f60c6466e7f"
  },
  {
    "url": "lib/workbox/workbox-routing.prod.js",
    "revision": "d3fa76a1c38649d596b1d2ffaf398128"
  },
  {
    "url": "lib/workbox/workbox-strategies.dev.js",
    "revision": "d1c19737e82e2f6bd567aaf384683174"
  },
  {
    "url": "lib/workbox/workbox-strategies.prod.js",
    "revision": "6033181992f0bc562ab1ef5f9ba34697"
  },
  {
    "url": "lib/workbox/workbox-streams.dev.js",
    "revision": "eed9eb6f7b0672c45db5408d05efe9b9"
  },
  {
    "url": "lib/workbox/workbox-streams.prod.js",
    "revision": "4407a13523f1fa1064f616e9047b6148"
  },
  {
    "url": "lib/workbox/workbox-sw.js",
    "revision": "6e1e47d706556eac8524f396e785d4bb"
  },
  {
    "url": "lib/workbox/workbox-window.dev.es5.mjs",
    "revision": "fc994f936328441cc31ce2c228c273e8"
  },
  {
    "url": "lib/workbox/workbox-window.dev.mjs",
    "revision": "0660ff174ef790c3eb7b804303560220"
  },
  {
    "url": "lib/workbox/workbox-window.dev.umd.js",
    "revision": "c17834573a1b48bb8cf33b12128bdae9"
  },
  {
    "url": "lib/workbox/workbox-window.prod.es5.mjs",
    "revision": "869476238d69f1d95543f9019c9541c6"
  },
  {
    "url": "lib/workbox/workbox-window.prod.mjs",
    "revision": "56cbbcdb311d6e4f35259abf7cc4fb10"
  },
  {
    "url": "lib/workbox/workbox-window.prod.umd.js",
    "revision": "c65238721ed1187cf832e51a9e34724a"
  },
  {
    "url": "sw-config.js",
    "revision": "48cd291e8a7ae65a051604af99d49421"
  },
  {
    "url": "workbox-config.js",
    "revision": "4f001211b1b11e06c05039053bb82db6"
  }
]);