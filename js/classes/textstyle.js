"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStyle = exports.TextAlign = void 0;
var TextAlign = /** @class */ (function () {
    function TextAlign(index) {
        var _this = this;
        this.values = ["left", "right", "center", "justify"];
        this.toString = function () {
            return _this.values[_this.index];
        };
        this.index = index - 1;
    }
    TextAlign.left = new TextAlign(1);
    TextAlign.right = new TextAlign(2);
    TextAlign.center = new TextAlign(3);
    TextAlign.justify = new TextAlign(4);
    return TextAlign;
}());
exports.TextAlign = TextAlign;
var TextStyle = /** @class */ (function () {
    function TextStyle(fontSize, fontWeight, textAlign, fontStyle) {
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontStyle = fontStyle;
    }
    TextStyle.prototype.toJson = function () {
        var jsonWithValuesNotNullToReturn = {};
        // Recorrer todas las propiedades de la case ignorando las que esta nulas 
        // para asi retornar los estilos que tengan valor
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                if (this[i] != null)
                    jsonWithValuesNotNullToReturn[i] = this[i];
                console.log(i + " -> " + this[i]);
            }
        }
        return jsonWithValuesNotNullToReturn;
    };
    return TextStyle;
}());
exports.TextStyle = TextStyle;
