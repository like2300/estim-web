'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "eedaf95f6ccee01522b45c0ac62c1b0c",
"version.json": "6d2667dea0b727e04c28dc8b9da6c597",
"index.html": "1483a68667d8ac2607c1b9f63e36094e",
"/": "1483a68667d8ac2607c1b9f63e36094e",
"main.dart.js": "c37cbb8b5b128e8f737e5de151d2636a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5df199e1db4d5728eb98bc5ad2cf412d",
"icons/favicon-16x16.png": "5130dd762801c6922543c6e6aaf91886",
"icons/favicon.ico": "07897394e036ec67b3927c671111f2f8",
"icons/apple-icon.png": "f896c7c42905d38c3ea07c75c18d6ad1",
"icons/apple-icon-144x144.png": "7be6d50874c131e2c97e88a72f92fc1e",
"icons/android-icon-192x192.png": "c079b94aaade49cade4ee830d2939d4b",
"icons/apple-icon-precomposed.png": "f896c7c42905d38c3ea07c75c18d6ad1",
"icons/apple-icon-114x114.png": "88c01b4134d847191d3afc3c6cde0d1d",
"icons/ms-icon-310x310.png": "6d1de6c7c96ee26f146abb2375c8c1a4",
"icons/ms-icon-144x144.png": "7be6d50874c131e2c97e88a72f92fc1e",
"icons/apple-icon-57x57.png": "08b2aad96ec74dc14b8e5166ae584da0",
"icons/apple-icon-152x152.png": "ab253aea504d91bbc53bb1d56974348b",
"icons/ms-icon-150x150.png": "d5460b3d88b34bdebf77a87b2fda30e2",
"icons/android-icon-72x72.png": "7cb2e190668234d3ea7ef1153a3f1f93",
"icons/android-icon-96x96.png": "f5ace810cdc2a24cee45c85a599b445b",
"icons/android-icon-36x36.png": "35dfc6301a53725a5d13c0d58d05062e",
"icons/apple-icon-180x180.png": "99b9b269cc1e46a2982afc7f028008aa",
"icons/favicon-96x96.png": "f5ace810cdc2a24cee45c85a599b445b",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "71c5adace59582616035ed9fea5b2a30",
"icons/apple-icon-76x76.png": "25831d4a3a137aa78d26391098885782",
"icons/apple-icon-60x60.png": "0178f6bcc8fb6d486d55d6b87b92442e",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "7be6d50874c131e2c97e88a72f92fc1e",
"icons/apple-icon-72x72.png": "7cb2e190668234d3ea7ef1153a3f1f93",
"icons/apple-icon-120x120.png": "c465f9e283882ff365f5a8c9b022a1ec",
"icons/favicon-32x32.png": "cc520c140abe152566c8087d8a95b8e5",
"icons/ms-icon-70x70.png": "c0fab9ed7038c41a00789f6205420b00",
"manifest.json": "5e2ae9a7a5a69b91ca1174fc318c00ca",
"assets/AssetManifest.bin.json": "e58b509e4111059b9d186010532eeea5",
"assets/AssetManifest.json": "b2df5566465787044ed7bddac9ffb990",
"assets/NOTICES": "b5d935d417f7e2971566fb24817a5e75",
"assets/FontManifest.json": "d9da46f6e3c6d1ec611ca59a972a3100",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9a0688067cbde86bf1535861f1d01106",
"assets/fonts/MaterialIcons-Regular.otf": "27eb669026bcf9c22de078c31ace377f",
"assets/assets/imgs/logo.png": "5df199e1db4d5728eb98bc5ad2cf412d",
"assets/assets/imgs/chip-1.png": "409e435802d9fa4da808f268dc8d6d9d",
"assets/assets/img/estim_girls.svg": "2c087f4bb2965d1a3146a1f36c16d3ca",
"assets/assets/img/students.png": "44a6ea5f0824416dc8f4b241f5d4566f",
"assets/assets/img/Hero.svg": "f2d90374f76ff220fb3bb4c353509579",
"assets/assets/img/Hero.png": "aba86a0218a0210a5f93888dfb8561a8",
"assets/assets/img/Home.svg": "c7a61b6edad9e8a18dc471079c9b0941",
"assets/assets/img/edt_image.png": "4b6a7d96c2201544f07fca163cda875d",
"assets/assets/img/AppsIcon.svg": "ceee42c6347e93a73821c5e9690e619f",
"assets/assets/img/ad_image.png": "116da53e7c07b28fc67d21419f140b7e",
"assets/assets/img/phone2.svg": "3e328d14700d7c7b8704bfc8b710899c",
"assets/assets/img/wave2.svg": "a6ba13f3d6691866f267376bfb6a78d5",
"assets/assets/img/wave3.svg": "f0e140052b7f296056ef81970be68df2",
"assets/assets/img/profile.svg": "f94f7d9c2d1fe0347b39ce9b9368bdce",
"assets/assets/img/wave1.svg": "bb8691d59777dc5554b84cac4596c44f",
"assets/assets/img/student.svg": "a2d095becd64fdd421dc4c1735f95c23",
"assets/assets/font/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/font/Quicksand-Bold.ttf": "c3bf00e585782373e1b601c07b513d85",
"assets/assets/font/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/icon/icon.png": "55e3490e315cff6b6ddeb99304de2d49",
"assets/assets/icon/Home.png": "3fd6c8fd272e9254ed4ae9d2018cac4c",
"assets/assets/icon/Profile.png": "6c89b96afbae846542c643af7665b45b",
"assets/assets/icon/Chat%2520Message.svg": "db9760fd5dca99a486ad4daba6c977a4",
"assets/assets/icon/Notification.svg": "1ba2b3a95b66bfe9eac510c3853e003e",
"assets/assets/icon/icon40x40.svg": "b50fb52bab563b3a9768420d9235b963",
"assets/assets/icon/Application.png": "30c10aada2c3fae4964873562502f370",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
