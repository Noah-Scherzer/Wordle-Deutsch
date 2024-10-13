self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('wordle-cache').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './style.css', // Falls du eine separate CSS-Datei hast
                './script.js', // Falls du eine separate JS-Datei hast
                './manifest.json',
                './icons/icon-192x192.png',
                './icons/icon-512x512.png'
                // Füge hier weitere Ressourcen hinzu, die gecacht werden sollen
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});