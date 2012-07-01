(function (document) {
  "use strict";

  function MockImage(src, height, width) {
    this.src = src;
    this.height = height;
    this.width = width;
    this.parentNode = this;
  }

  MockImage.prototype = {
    tagName: "img",
    getAttribute: function () {
      return false;
    },
    setAttribute: function () {
      return false;
    },
    style: {}
  };

  var o = document.getElementsByTagName, imgs = [];

  function initImages() {
    var tags = document.getElementsByTagName("meta"), i;
    for (i = 0; i < tags.length; i++) {
      if (tags[i].getAttribute("name") === "og:image") {
        imgs.push(new MockImage(tags[i].getAttribute("content"), 100, 100));
      }
    }
  }

  document.getElementsByTagName = function (n) {
    if (n === "embed") {
      return imgs;
    }
    return o.apply(document, arguments);
  };

  initImages();
}(document));
