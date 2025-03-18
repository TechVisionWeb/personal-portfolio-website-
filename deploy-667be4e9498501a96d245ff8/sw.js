const PRECACHE = "precache-v1";
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    "/android-chrome-192x192.png",
    "/android-chrome-512x512.png",
    "/browserconfig.xml",
    "/contact.html",
    "/currency-converter.html",
    "/education.html",
    "/favicon.ico",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/forecaster.html",
    "/index.html",
    "/ip-address-tracker.html",
    "/projects.html",
    "/safari-pinned-tab.svg",
    "/site.webmanifest",
    "/testimonials.html",
    "/work.html",
    "/assets/currency_thumbnail-desktop.png",
    "/assets/currency_thumbnail-mobile.png",
    "/assets/forecaster_thumbnail-desktop.png",
    "/assets/forecaster_thumbnail-mobile.png",
    "/assets/ink-42357_1920.png",
    "/assets/ink-42357_640.png",
    "/assets/ip-address_thumbnail-desktop.png",
    "/assets/ip-address_thumbnail-mobile.png",
    "/assets/logo.png",
    "/assets/me_320-removebg-preview.png",
    "/assets/me_320-removebg-preview.webp",
    "/assets/me_320-removebg-preview-2x.png",
    "/assets/me_320-removebg-preview-2x.webp",
    "/assets/new_bitmap_image-removebg-preview.png",
    "/assets/ip-address-images/favicon-32x32.png",
    "/assets/ip-address-images/icon-arrow.svg",
    "/assets/ip-address-images/icon-location.svg",
    "/assets/ip-address-images/pattern-bg.png",
    "/fonts/finger-paint-v15-latin/finger-paint-v15-latin-regular.eot",
    "/fonts/finger-paint-v15-latin/finger-paint-v15-latin-regular.svg",
    "/fonts/finger-paint-v15-latin/finger-paint-v15-latin-regular.ttf",
    "/fonts/finger-paint-v15-latin/finger-paint-v15-latin-regular.woff",
    "/fonts/finger-paint-v15-latin/finger-paint-v15-latin-regular.woff2",
    "/fonts/finger_paint/ofl.txt",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/license.txt",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/brands.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/brands.min.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/fontawesome.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/fontawesome.min.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/solid.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/solid.min.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/svg-with-js.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/css/svg-with-js.min.css",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/categories.yml",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/icon-families.json",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/icon-families.yml",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/icons.json",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/icons.yml",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/shims.json",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/shims.yml",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/metadata/sponsors.yml",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/svgs/brands/linkedin.svg",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/svgs/brands/linkedin-in.svg",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/svgs/solid/bars.svg",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/svgs/solid/bars-progress.svg",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/svgs/solid/bars-staggered.svg",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-brands-400.ttf",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-brands-400.woff2",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-regular-400.ttf",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-regular-400.woff2",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-solid-900.ttf",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-solid-900.woff2",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-v4compatibility.ttf",
    "/fonts/fontawesome-free-6.2.0-web/fontawesome-free-6.2.0-web/webfonts/fa-v4compatibility.woff2",
    "/javascript/app.min.js",
    "/javascript/jquery-3.6.1.min.js",
    "/javascript/leaflet.js",
    "/javascript/leaflet.js.map",
    "/javascript/leaflet-src.esm.js",
    "/javascript/leaflet-src.esm.js.map",
    "/javascript/leaflet-src.js",
    "/javascript/leaflet-src.js.map",
    "/javascript/leaflet-src.min.js",
    "/javascript/script.min.js",
    "/javascript/script-currency.min.js",
    "/javascript/script-forecaster.min.js",
    "/styles/google.css",
    "/styles/leaflet.css",
    "/styles/reset.min.css",
    "/styles/style-contact.min.css",
    "/styles/style-currency.min.css",
    "/styles/style-education-work.min.css",
    "/styles/style-forecaster.min.css",
    "/styles/style-global.min.css",
    "/styles/style-index.min.css",
    "/styles/style-ip-address.min.css",
    "/styles/style-projects-testimonials.min.css",
  ];
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});