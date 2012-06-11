(function ($, document) {
  "use strict";

  function MockImage(src, height, width) {
    this.src = src;
    this.height = height;
    this.width = width;
  }

  MockImage.prototype = {
    tagName: "img",
    getAttribute: function () {
      return false;
    },
    style: {}
  };

  var
    o = document.getElementsByTagName,
    imgs = $('meta[property="og:image"]').map(function () {
      return new MockImage(this.getAttribute("content"), 100, 100);
    });

  document.getElementsByTagName = function (n) {
    if (n === "embed") {
      return imgs;
    }
    return o.apply(document, arguments);
  };
}(jQuery, document));
