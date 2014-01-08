(function () {
  var headerElement;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/html/test.html', function (win, doc) {
      headerElement = iframeHandler.document.querySelector('ceci-header');
      done();
    });
  });

  describe('Ceci Header', function () {
    test('Sanity check', function (done) {
      chai.assert(headerElement.ceci, 'Ceci descriptor exists.');
      iframeHandler.runIframeTest('Sanity Check', done);
    });

    test('Listeners', function (done) {
      iframeHandler.testListeners(headerElement, done, {
        check: {
          navigateHere: function (e, channel) {
            chai.assert(true);
          }
        }
      });
    });
  });
})();
