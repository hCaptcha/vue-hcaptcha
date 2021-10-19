"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var __1 = require("../");
var app = new vue_1["default"]({
    render: function (h) {
        return h(__1["default"], { props: { s: 'foo' } });
    }
});
