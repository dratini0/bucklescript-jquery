// Generated by BUCKLESCRIPT VERSION 1.0.1 , PLEASE EDIT WITH CARE
'use strict';

var Jquery$prime = require("jquery");
var Pervasives   = require("bs-platform/lib/js/pervasives");
var Jquery       = require("jquery");
var Jquery_      = require("jquery");

function jquery(prim) {
  return Jquery(prim);
}

function addClass(prim, prim$1) {
  return prim$1.addClass(prim);
}

function css(prim, prim$1, prim$2) {
  return prim$2.css(prim, prim$1);
}

function outerHeight(prim, prim$1) {
  return prim$1.outerHeight(prim);
}

var cssNumber = Jquery_.cssNumber();

function demo() {
  var body = Jquery("body");
  body.addClass("hoge");
  body.addClass(function (_, s) {
        var o = this ;
        console.log(o);
        console.log(Jquery$prime(o));
        return s;
      });
  console.log(Pervasives.string_of_bool(body.hasClass("hoge")));
  console.log(body.html());
  console.log(body.html("hoge"));
  console.log(body.html());
  var div = body.append(('<div>Hey</div>'));
  body.css({
        background: "pink",
        width: "100px"
      });
  div.attr("id", "test").css("color", "red");
  console.log("Done");
  return /* () */0;
}

exports.jquery      = jquery;
exports.addClass    = addClass;
exports.css         = css;
exports.outerHeight = outerHeight;
exports.cssNumber   = cssNumber;
exports.demo        = demo;
/* cssNumber Not a pure module */