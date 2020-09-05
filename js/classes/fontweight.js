"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontWeight = void 0;
var FontWeight = /** @class */ (function () {
    function FontWeight(index) {
        var _this = this;
        this.values = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "bolder", "lighter", "normal", "bold"];
        this.toString = function () {
            return _this.values[_this.index];
        };
        this.index = index - 1;
    }
    FontWeight.w100 = new FontWeight(1);
    FontWeight.w200 = new FontWeight(2);
    FontWeight.w300 = new FontWeight(3);
    FontWeight.w400 = new FontWeight(4);
    FontWeight.w500 = new FontWeight(5);
    FontWeight.w600 = new FontWeight(6);
    FontWeight.w700 = new FontWeight(7);
    FontWeight.w800 = new FontWeight(8);
    FontWeight.w900 = new FontWeight(9);
    FontWeight.bolder = new FontWeight(10);
    FontWeight.lighter = new FontWeight(11);
    FontWeight.normal = new FontWeight(12);
    FontWeight.bold = new FontWeight(13);
    return FontWeight;
}());
exports.FontWeight = FontWeight;
