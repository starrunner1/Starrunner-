
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('starrunner-todo').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './sw.js',
        './background.jpg',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
