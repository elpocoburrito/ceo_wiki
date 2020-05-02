/// ### ---- ### sample level workaround ### ---- ### ///
var fn1 = $.fn.roundSlider.prototype._setProperties;
$.fn.roundSlider.prototype._setProperties = function () {
  fn1.apply(this);
  var o = this.options, r = o.radius, d = r * 2,
      r1 = r - (o.width / 2) - this._border(true),
      svgNS = "http://www.w3.org/2000/svg";
  this._circum = Math.PI * (r1 * 2);

  var $svg = $(document.createElementNS(svgNS, "svg"));
  $svg.attr({ "height": d, "width": d });

  this.$circle = $(document.createElementNS(svgNS, 'circle')).attr({
    "fill": "transparent", "class": "rs-transition", "cx": r, "cy": r, "r": r1,
    "stroke-width": o.width, "stroke-dasharray": this._circum
  }).appendTo($svg);

  this.$svg_box = $(document.createElement("div")).addClass("rs-transition rs-svg").append($svg).css({
    "height": d, "width": d, "transform-origin": "50% 50%",
    "transform": "rotate(" + (o.startAngle + 180) + "deg)"
  }).appendTo(this.innerContainer);
}

var fn2 = $.fn.roundSlider.prototype._changeSliderValue;
$.fn.roundSlider.prototype._changeSliderValue = function (val, deg) {
  fn2.apply(this, arguments);
  deg = deg - this.options.startAngle;

  if (this._rangeSlider) {
    this.$svg_box.rsRotate(this._handle1.angle + 180);
    deg = this._handle2.angle - this._handle1.angle;
  }
  var pct = (1 - (deg / 360)) * this._circum;
  this.$circle.css({ strokeDashoffset: pct });
}
/// ### ---- ### --------------------- ### ---- ### ///
