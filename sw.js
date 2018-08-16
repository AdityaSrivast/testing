importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('acm-vit').then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/projects/index.html',
				'/css/common1.css',
				'/css/common2.css',
				'/css/common3.css',
				'/css/events.css',
				'/css/slick.css',
				'/css/slick-theme.css',
				'/js/events.js',
				'/js/imagesloaded.pkgd.min.js',
				'/js/script.js',
				'/js/slick.min.js',
				'/img/gallery/gallery-1.jpg',
				'/img/gallery/gallery-2.jpg',
				'/img/gallery/gallery-3.jpg',
				'/img/gallery/gallery-4.jpg',
				'/img/gallery/gallery-5.jpg',
				'/img/gallery/gallery-6.jpg',
				'/img/gallery/gallery-7.jpg',
				'/img/gallery/gallery-8.jpg',
				'/img/gallery/gallery-9.jpg',
				'/img/gallery/gallery-10.jpg',
				'/img/gallery/gallery-11.jpg',
				'/img/gallery/gallery-12.jpg',
				'/img/gallery/gallery-13.jpg',
				'/img/gallery/gallery-14.jpg',
				'/img/gallery/gallery-15.jpg',
				'/img/gallery/gallery-16.jpg',
				'/img/background.png',
				'/img/vitgate.png',
				'/img/contact.png',
				'/img/p-c2c.png',
				'/img/p-codart.png',
				'/img/p-pravega.png',
				'/img/ai.png',
				]);
		})
	);
});
self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});