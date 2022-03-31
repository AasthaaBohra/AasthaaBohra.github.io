function persistLocalChanges() {
  return getLocalRecords().then(records => {
    return fetch('/markdowns', {
      method: 'POST',
      body: JSON.stringify({
        markdowns: records
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
}

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
      })
  );
});
self.addEventListener('activate', function(event) {
  console.log('Service worker activated');
  // Perform some task
});
self.addEventListener('fetch', evt =>{
  console.log('fetch event', evt);
});
async 
async function requestBackgroundSync() {
    await self.registration.sync.register('my-tag-name');
}
self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        console.log('synced successfully', event);
    }
});
