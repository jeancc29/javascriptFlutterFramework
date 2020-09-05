"use strict";
var fontSizeUnit = "px";
var heightUnit = "vh";
var widthUnit = "vw";
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
var BorderRadius = /** @class */ (function () {
    function BorderRadius(_a) {
        var _this = this;
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        this.toString = function () {
            _this.top = (_this.top != null) ? _this.top : 0;
            _this.right = (_this.right != null) ? _this.right : 0;
            _this.bottom = (_this.bottom != null) ? _this.bottom : 0;
            _this.left = (_this.left != null) ? _this.left : 0;
            return "" + _this.top + fontSizeUnit + " " + _this.right + fontSizeUnit + " " + _this.bottom + fontSizeUnit + " " + _this.left + fontSizeUnit;
        };
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    BorderRadius.all = function (radius) {
        return new BorderRadius({ top: radius, right: radius, bottom: radius, left: radius });
    };
    BorderRadius.only = function (_a) {
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        return new BorderRadius({ top: top, right: right, bottom: bottom, left: left });
    };
    return BorderRadius;
}());
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
var MainAxisAlignment = /** @class */ (function () {
    function MainAxisAlignment(index) {
        var _this = this;
        this.values = ["flex-start", "flex-end", "center", "space-evenly", "space-around", "space-between"];
        this.toString = function () {
            return _this.values[_this.index];
        };
        this.index = index - 1;
    }
    MainAxisAlignment.start = new MainAxisAlignment(1);
    MainAxisAlignment.end = new MainAxisAlignment(2);
    MainAxisAlignment.center = new MainAxisAlignment(3);
    MainAxisAlignment.spaceEvenly = new MainAxisAlignment(4);
    MainAxisAlignment.spaceAround = new MainAxisAlignment(5);
    MainAxisAlignment.spaceBetween = new MainAxisAlignment(6);
    return MainAxisAlignment;
}());
var CrossAxisAlignment = /** @class */ (function () {
    function CrossAxisAlignment(index) {
        var _this = this;
        this.values = ["flex-start", "flex-end", "center", "stretch"];
        this.toString = function () {
            return _this.values[_this.index];
        };
        this.index = index - 1;
    }
    CrossAxisAlignment.start = new CrossAxisAlignment(1);
    CrossAxisAlignment.end = new CrossAxisAlignment(2);
    CrossAxisAlignment.center = new CrossAxisAlignment(3);
    CrossAxisAlignment.stretch = new CrossAxisAlignment(4);
    return CrossAxisAlignment;
}());
var TextStyle = /** @class */ (function () {
    function TextStyle(_a) {
        var fontSize = _a.fontSize, fontWeight = _a.fontWeight, textAlign = _a.textAlign, fontStyle = _a.fontStyle, color = _a.color, background = _a.background, borderRadius = _a.borderRadius, width = _a.width, height = _a.height;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontStyle = fontStyle;
        this.color = color;
        this.background = background;
        this.borderRadius = borderRadius;
        this.width = width;
        this.height = height;
    }
    TextStyle.prototype.toJson = function () {
        var jsonWithValuesNotNullToReturn = {};
        // Recorrer todas las propiedades de la case ignorando las que esta nulas 
        // para asi retornar los estilos que tengan valor
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                if (this[i] != null && this[i] != undefined) {
                    if (typeof this[i] == "object")
                        jsonWithValuesNotNullToReturn[i] = this[i].toString();
                    else {
                        var valor = "";
                        if (i == "fontSize" || i == "width" || i == "height") {
                            valor += "" + this[i] + fontSizeUnit;
                            console.log("" + valor);
                        }
                        else
                            valor = this[i];
                        jsonWithValuesNotNullToReturn[i] = valor;
                    }
                }
                // console.log(i + " -> " + this[i]);
            }
        }
        return jsonWithValuesNotNullToReturn;
    };
    return TextStyle;
}());
var ContainerStyle = /** @class */ (function () {
    function ContainerStyle(color, fontWeight, textAlign, fontStyle) {
        this.color = color;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontStyle = fontStyle;
    }
    ContainerStyle.prototype.toJson = function () {
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
    return ContainerStyle;
}());
function Init(id, child) {
    var element = document.getElementById(id);
    return { "element": element, "child": child };
}
function Texto(text, style, id) {
    if (id === void 0) { id = null; }
    var element = document.createElement("p");
    element.innerHTML = text;
    // Object.keys(style.toJson()).forEach(key => {
    //     element.style[key] = style[key];
    // });
    var styleJson = style.toJson();
    console.log("TExt style json: ", styleJson);
    Object.keys(styleJson).forEach(function (key) {
        element.style[key] = styleJson[key];
        console.log("TExt style foreach: ", styleJson[key]);
    });
    return { "element": element, "child": null };
}
function Container(child, style, id) {
    if (id === void 0) { id = null; }
    var element = document.createElement("div");
    // Object.keys(style.toJson()).forEach(key => {
    //     element.style[key] = style[key];
    // });
    if (style != null && style != undefined) {
        console.log("Container style: ", style);
        var styleJson = style.toJson();
        Object.keys(styleJson).forEach(function (key) {
            element.style[key] = styleJson[key];
        });
    }
    return { "element": element, "child": child };
}
function Row(_a) {
    var children = _a.children, mainAxisAlignment = _a.mainAxisAlignment, crossAxisAlignment = _a.crossAxisAlignment;
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    element.style.display = "flex";
    element.style.flexDirection = "row";
    if (mainAxisAlignment != null && mainAxisAlignment != undefined)
        element.style.justifyContent = mainAxisAlignment.toString();
    if (crossAxisAlignment != null && crossAxisAlignment != undefined)
        element.style.alignItems = crossAxisAlignment.toString();
    return { "element": element, "child": children };
}
function Column(_a) {
    var children = _a.children, mainAxisAlignment = _a.mainAxisAlignment, crossAxisAlignment = _a.crossAxisAlignment;
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    element.style.display = "flex";
    element.style.flexDirection = "column";
    if (mainAxisAlignment != null && mainAxisAlignment != undefined)
        element.style.justifyContent = mainAxisAlignment.toString();
    if (crossAxisAlignment != null && crossAxisAlignment != undefined)
        element.style.alignItems = crossAxisAlignment.toString();
    return { "element": element, "child": children };
}
function Flexible(_a) {
    var child = _a.child, flex = _a.flex;
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    if (flex != null && flex != undefined)
        element.style.flexGrow = "" + flex;
    return { "element": element, "child": child };
}
function Expanded(_a) {
    var child = _a.child;
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    element.style.flexGrow = "20";
    return { "element": element, "child": child };
}
function builderRecursivo(valor, isInit) {
    if (isInit === void 0) { isInit = false; }
    if ((valor.child == null || valor.child == undefined) && Array.isArray(valor) == false)
        return 0;
    if (Array.isArray(valor.child)) {
        // valor.element.appendChild()
        builderArrayRecursivo(valor);
    }
    else {
        valor.element.appendChild(valor.child.element);
        builderRecursivo(valor.child);
    }
}
function builderArrayRecursivo(valor) {
    console.log("recursiveArray valor: ", valor);
    if (!Array.isArray(valor.child))
        return;
    if (valor.child.length <= 0)
        return;
    var hijo = valor.child.shift();
    console.log("builderArrayRecursivo: ", hijo);
    if (hijo.element == null) {
        console.log("builderArrayRecursivo hijo.element == null: ", hijo);
        return;
    }
    // console.log("builderArrayRecursivo hijo.element == null: ", hijo);
    valor.element.appendChild(hijo.element);
    if (hijo.child != null)
        builderRecursivo(hijo);
    builderArrayRecursivo(valor);
}
var p = Init("container", Container(Row({
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [
        Flexible({
            flex: 1,
            child: Row({
                children: [
                    Texto("jean", new TextStyle({ fontSize: 15 })),
                    Texto("Contreras", new TextStyle({ fontSize: 15 })),
                ],
                mainAxisAlignment: MainAxisAlignment.spaceAround,
            })
        }),
        Flexible({
            flex: 3,
            child: Row({
                children: [
                    Texto("jean", new TextStyle({ fontSize: 15 })),
                    Texto("Contreras", new TextStyle({ fontSize: 15 })),
                ],
                mainAxisAlignment: MainAxisAlignment.spaceAround,
            })
        }),
    ]
}), new TextStyle({ background: "red", borderRadius: BorderRadius.all(3), width: 500 })));
builderRecursivo(p, true);
