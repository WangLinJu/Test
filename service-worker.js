/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "19bf3c0b3489c51f46c07e8b4045a5ef"
  },
  {
    "url": "assets/css/0.styles.a36b2b07.css",
    "revision": "e197f81a0d178ef25a5c26d0c43d5e07"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4eb94f4e.js",
    "revision": "bdb73cd4dbb632cadb2fb66bff4b709f"
  },
  {
    "url": "assets/js/2.44a3993f.js",
    "revision": "2dd9700aad7cacceb9b723e8f3067ebd"
  },
  {
    "url": "assets/js/3.ff826b68.js",
    "revision": "5266a732d1dad8b126cd529b5088eea3"
  },
  {
    "url": "assets/js/4.3228d4e9.js",
    "revision": "61ec5d5a9d581ae3cf5916593a61e644"
  },
  {
    "url": "assets/js/5.802b01a8.js",
    "revision": "d8a6a8e9b98dbceb590556121819c1e1"
  },
  {
    "url": "assets/js/6.7a455ff4.js",
    "revision": "b5b072100f49b18357171646a1d3f7b0"
  },
  {
    "url": "assets/js/7.425191d1.js",
    "revision": "4f15c01a2aaf7d7ac39788fba75e3a59"
  },
  {
    "url": "assets/js/8.efdd9cf6.js",
    "revision": "80bd1c7b6fb6a3e5e98915e3a1da9dc3"
  },
  {
    "url": "assets/js/9.70774570.js",
    "revision": "58eda9b8d8740309a0ec592a731d4d39"
  },
  {
    "url": "assets/js/app.45620755.js",
    "revision": "720196057f5fb6b9efd6645dff57a14f"
  },
  {
    "url": "icons/favicon128.jpg",
    "revision": "aeceede531928e14fde6c3db366ff87d"
  },
  {
    "url": "icons/favicon256.jpg",
    "revision": "9c6d8184a240134aeb948deea58b8929"
  },
  {
    "url": "icons/favicon512.jpg",
    "revision": "43e1965a40e9003abf1b32c23a221ff1"
  },
  {
    "url": "index.html",
    "revision": "91d93c88335684ffdc2f52b9d4a602b4"
  },
  {
    "url": "test.html",
    "revision": "e3335cd20f1e83381552bec397913266"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
