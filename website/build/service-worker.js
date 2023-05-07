if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"fa62ce156aa6876c347c4b430ee84b20","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"fa62ce156aa6876c347c4b430ee84b20","url":"index.html"},{"revision":"eeea354a528060185692343a2241b898","url":"static/css/1.9cc798a9.chunk.css"},{"revision":"06a31d861dfbf4b4aacaf76534daecbe","url":"static/css/10.bded3b46.chunk.css"},{"revision":"36e95ab543e60c3a2addde3d7bd9157e","url":"static/css/11.93fea831.chunk.css"},{"revision":"e399da8dff3a9ea8980f4e7b765f8f37","url":"static/css/4.79b962c3.chunk.css"},{"revision":"a8a66647b0bcf7e198b2762145602d23","url":"static/js/0.78c07ef1.chunk.js"},{"revision":"6b1983c09327aed4ec5389ce322e567a","url":"static/js/1.4e364bdc.chunk.js"},{"revision":"6a678d5fd86dc01315bffa808e752ef9","url":"static/js/10.6e259721.chunk.js"},{"revision":"661691c8bc5b0765431e36d35d9926bd","url":"static/js/11.ef0491a6.chunk.js"},{"revision":"39e99e2cb45b3aef0ab4412d02d8fcbd","url":"static/js/12.0721569a.chunk.js"},{"revision":"03239c6dd619ddbe23e1b7354e33c7f6","url":"static/js/13.9659af16.chunk.js"},{"revision":"ca561ab01d9f34099a0d15d63d685891","url":"static/js/14.792cb33b.chunk.js"},{"revision":"1e562da2f120a8d9f3941d14a0e2d849","url":"static/js/15.8e98d101.chunk.js"},{"revision":"81b0ff157cd1ddd2f01f0fb6c7691e65","url":"static/js/16.e89e4b51.chunk.js"},{"revision":"0a7a4579c21d439f44dcd0de25723631","url":"static/js/17.080fd050.chunk.js"},{"revision":"06a482ccca2011c1a49952175353b0da","url":"static/js/18.f0ada55e.chunk.js"},{"revision":"5279a069dc9c68d8d2394d8352bb9e20","url":"static/js/19.17995c44.chunk.js"},{"revision":"442d93776337f83baed7883d557e97b9","url":"static/js/20.e573414f.chunk.js"},{"revision":"7769b92701edc8f5abc28b07163f6e49","url":"static/js/21.f3846dcd.chunk.js"},{"revision":"b2585f8b0f23122593f1d00148ce95e3","url":"static/js/22.eea0aca6.chunk.js"},{"revision":"3a6418cf0493071e094f739e7b2dbda6","url":"static/js/23.48dc5bf6.chunk.js"},{"revision":"7a0dd7ac9bab49a763398f9d762705c3","url":"static/js/24.793f31ca.chunk.js"},{"revision":"41b273ffaffac27d7e0a60b4f0e6ef04","url":"static/js/25.09150845.chunk.js"},{"revision":"3333a9d4a00f86556aecd0040c1365ea","url":"static/js/4.2b806732.chunk.js"},{"revision":"9e2b9629de7a151f6af66ade4337d4aa","url":"static/js/5.956e864f.chunk.js"},{"revision":"a9ab1a85521043cec36b2bacf190f9e4","url":"static/js/6.3ef199dd.chunk.js"},{"revision":"274208b71ce7557bcff6ac7b6955c138","url":"static/js/7.e30f23fa.chunk.js"},{"revision":"60b7812696f44f6b5310c30235d3d416","url":"static/js/8.edb97df9.chunk.js"},{"revision":"80e50a7a9a9351576191a6bf9750f39f","url":"static/js/9.3f353a11.chunk.js"},{"revision":"822c6788c593fb0a7596f1b0942ea2df","url":"static/js/main.d32f757a.chunk.js"},{"revision":"d7e0969ef64effa5718a43074a00dc49","url":"static/js/runtime-main.2694624e.js"},{"revision":"9b9ec29522d1bf8924ccc2d917e1807b","url":"static/media/roboto-cyrillic-300-normal.1431d1ce.woff2"},{"revision":"d9ac47c7e500fb7083b8d595eaf6fe12","url":"static/media/roboto-cyrillic-400-normal.71a33b6b.woff2"},{"revision":"7b08b9e11fc6b8a8a1398b357e874144","url":"static/media/roboto-cyrillic-500-normal.cad7d3d9.woff2"},{"revision":"6f112ec2b932ee12379442c42853244e","url":"static/media/roboto-cyrillic-700-normal.d010f1f3.woff2"},{"revision":"d04413353a32aed8a0db452373452870","url":"static/media/roboto-cyrillic-ext-300-normal.4777461b.woff2"},{"revision":"c00467dc3792a8ab586955a3faefcac9","url":"static/media/roboto-cyrillic-ext-400-normal.80437895.woff2"},{"revision":"2742d81afb69e902e4513dc7cdda0a7f","url":"static/media/roboto-cyrillic-ext-500-normal.62ced72e.woff2"},{"revision":"e0bc9313fdde7851c88c901baf3c2b5c","url":"static/media/roboto-cyrillic-ext-700-normal.be4d0245.woff2"},{"revision":"dcdaee374d5bbeab0a5ed5c8cf39a6cd","url":"static/media/roboto-greek-300-normal.db263277.woff2"},{"revision":"28668857bef1b85c5748a482cf9b74af","url":"static/media/roboto-greek-400-normal.c35e4c39.woff2"},{"revision":"53f395eb854a40e978706b1082570e42","url":"static/media/roboto-greek-500-normal.9ac81fef.woff2"},{"revision":"3f8b2aa43c439ca2c8930c198320c231","url":"static/media/roboto-greek-700-normal.50e795c1.woff2"},{"revision":"c2be5367fbf0e1066261fd78eb103f4a","url":"static/media/roboto-greek-ext-300-normal.35b9d6be.woff2"},{"revision":"35de3738b76d249ed060dd3d0f9286be","url":"static/media/roboto-greek-ext-400-normal.16961982.woff2"},{"revision":"e7b7001dff6c14165abdc0fefdecae06","url":"static/media/roboto-greek-ext-500-normal.6fb9cffb.woff2"},{"revision":"2953af0021626d3c3078b17590118908","url":"static/media/roboto-greek-ext-700-normal.bd9854c7.woff2"},{"revision":"b9c29351c46f3e8c8631c4002457f48a","url":"static/media/roboto-latin-300-normal.c48fb676.woff2"},{"revision":"15d9f621c3bd1599f0169dcf0bd5e63e","url":"static/media/roboto-latin-400-normal.b009a76a.woff2"},{"revision":"3a44e06eb954b96aa043227f3534189d","url":"static/media/roboto-latin-500-normal.f25d774e.woff2"},{"revision":"e9f5aaf547f165386cd313b995dddd8e","url":"static/media/roboto-latin-700-normal.227c9319.woff2"},{"revision":"716871ec15f054ec158445180fe280e1","url":"static/media/roboto-latin-ext-300-normal.dc7dcec8.woff2"},{"revision":"87ace20058325aa069320aa4af875dff","url":"static/media/roboto-latin-ext-400-normal.861b791f.woff2"},{"revision":"e36fccd06262bef92e7a9841e2202225","url":"static/media/roboto-latin-ext-500-normal.9165081d.woff2"},{"revision":"deb26e9b1a25438118e5d39d741ae6b6","url":"static/media/roboto-latin-ext-700-normal.ed67ad54.woff2"},{"revision":"48c684d99330969e3ce90b9e9da2d698","url":"static/media/roboto-vietnamese-300-normal.32fc45a3.woff2"},{"revision":"ca3b09b62fda648a4511700413313fd0","url":"static/media/roboto-vietnamese-400-normal.3230f9b0.woff2"},{"revision":"7cda2cfee99d697daf8c14819d9004eb","url":"static/media/roboto-vietnamese-500-normal.d8642a3d.woff2"},{"revision":"cdaab83619fcacd4027a77c99dd51e69","url":"static/media/roboto-vietnamese-700-normal.3425a701.woff2"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
