self.addEventListener('message', function(e) {
  // fetch content
  fetch()

  // return data to Main thread
  self.postMessage("hello");
}, false);