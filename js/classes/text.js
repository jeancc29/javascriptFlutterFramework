"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Texto = void 0;
function Texto(text, style, id) {
    if (id === void 0) { id = null; }
    var element = document.createElement("p");
    element.innerHTML = text;
    var styleJson = style.toJson();
    Object.keys(styleJson).forEach(function (key) {
        element.style[+key] = styleJson[+key];
    });
    return { "element": element, "child": null };
}
exports.Texto = Texto;
