
    if ('serviceWorker' in navigator) {
      // Register a service worker hosted at the root of the
      // site using the default scope.
      navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service worker registration succeeded:', registration);
      }, /*catch*/ function(error) {
        console.log('Service worker registration failed:', error);
      });
    } else {
      console.log('Service workers are not supported.');
    }
self. addEventListener ('install', function (event) {
   console.log('Application installed');
});

if ('serviceWorker' in navigator && 'SyncManager' in window) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => navigator.serviceWorker.ready)
      .catch(err => {
        console.log(`ServiceWorker registration failed: ${err}`);
      });
  });
}
navigator.serviceWorker.register('service-worker.js')
  .then(registration => navigator.serviceWorker.ready)
  .then(registration => {
    Notification.requestPermission();
    $('#submit-markdown').on('click', () => {
      saveMarkdownLocally().then(() => {
        registration.sync.register('persistToDatabase');
      }).catch(err => console.log("Error submitting markdown: ", err));
    });
  })
  .catch(err => {
    console.log(`ServiceWorker registration failed: ${err}`);
  });
