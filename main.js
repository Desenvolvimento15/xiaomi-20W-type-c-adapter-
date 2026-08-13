!(function (e, t) {
  var i = t.documentElement;
  function updateFontSize() {
    var clientWidth = i.clientWidth || window.innerWidth || 320;
    var fontSize;
    if (clientWidth <= 768) {
      // Mobile rem scaling math (base 22.5rem for container width)
      var targetWidth = clientWidth > 720 ? 720 : clientWidth < 320 ? 320 : clientWidth;
      fontSize = targetWidth / 22.5;
    } else {
      // Desktop rem scaling math (base 10rem for container width)
      fontSize = clientWidth >= 1226 ? clientWidth / 10 : 122.6;
    }
    i.style.fontSize = fontSize + "px";
    e.rootFontSize = fontSize;
  }

  e.addEventListener("resize", updateFontSize, !1);
  e.addEventListener("pageshow", function (e) {
    e.persisted && updateFontSize();
  }, !1);

  updateFontSize();

  if (e.devicePixelRatio && e.devicePixelRatio >= 2) {
    var o = t.createElement("div"),
      d = t.createElement("body");
    o.style.border = "0.5px solid transparent";
    d.appendChild(o);
    i.appendChild(d);
    if (1 === o.offsetHeight) {
      i.classList.add("hairlines");
    }
    i.removeChild(d);
  }
})(window, document);
