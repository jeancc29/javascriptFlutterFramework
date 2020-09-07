"use strict";
/********************* VARIABLES  ************************************/
var fontSizeUnit = "px";
var heightUnit = "vh";
var widthUnit = "vw";
/********************* FUNCTIONES  ************************************/
// function TextEditingController(){
//     let input = document.createElement("input");
// }
function InitDefaultStyle() {
    var buttonHover = 'div.buttonHover:hover{ background-color: rgba(0,0,0,0.8); filter:brightness(0.9); }';
    var defaultStyle = document.getElementById("defaultStyle");
    if (defaultStyle == null || defaultStyle == undefined) {
        var style = document.createElement('style');
        style.setAttribute("id", "defaultStyle");
        style.appendChild(document.createTextNode(buttonHover));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}
var TextEditingController = /** @class */ (function () {
    function TextEditingController() {
        var _this = this;
        this.text = "";
        this.input = document.createElement("input");
        this.input.addEventListener("input", function () {
            console.log("Dentro del controller");
            _this.text = _this.input.value;
        });
    }
    return TextEditingController;
}());
var FormGlobalKey = /** @class */ (function () {
    // private callBackError = function(error : string){
    //     this.
    //     throw "Error FormGlobalKey";
    // }
    function FormGlobalKey() {
        this.error = false;
        this.text = "";
        this.form = document.createElement("form");
    }
    FormGlobalKey.prototype.validate = function () {
        try {
            //Obtenemos todos los inputs que estan dentro de este form 'FormGlobalKey'
            var inputs = this.form.getElementsByTagName("input");
            var valid = true;
            //Callback que se llamara desde los inputs en caso de no ser validor
            var callBackError = (function (errorMessage) {
                valid = false;
                throw "Error FormGlobalKey";
            }).bind(valid);
            //Creamos el evento personalizado 'CustomEvent' y le pasamos el callbackError
            var event = new CustomEvent('validate', { "detail": callBackError });
            // Disparar event.
            // elem.dispatchEvent(event);
            //Disparamos cada uno de los eventos de cada input
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].dispatchEvent(event);
            }
            return valid;
        }
        catch (error) {
            console.log("Error FormGlobaKey validate");
            return false;
        }
    };
    return FormGlobalKey;
}());
/********************* INTERFACES  ************************************/
/********************* STYLES  ************************************/
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
var EdgetInsets = /** @class */ (function () {
    function EdgetInsets(_a) {
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
    EdgetInsets.all = function (radius) {
        return new EdgetInsets({ top: radius, right: radius, bottom: radius, left: radius });
    };
    EdgetInsets.only = function (_a) {
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        return new EdgetInsets({ top: top, right: right, bottom: bottom, left: left });
    };
    return EdgetInsets;
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
        var fontSize = _a.fontSize, fontWeight = _a.fontWeight, textAlign = _a.textAlign, fontStyle = _a.fontStyle, color = _a.color, background = _a.background, padding = _a.padding, borderRadius = _a.borderRadius, width = _a.width, height = _a.height, fontFamily = _a.fontFamily, cursor = _a.cursor;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontStyle = fontStyle;
        this.color = color;
        this.background = background;
        this.borderRadius = borderRadius;
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.fontFamily = fontFamily;
        this.cursor = cursor;
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
function Init(_a) {
    var id = _a.id, child = _a.child, style = _a.style, _b = _a.initDefaultStyle, initDefaultStyle = _b === void 0 ? false : _b;
    var element = document.getElementById(id);
    if (style != null && style != undefined) {
        console.log("Container style: ", style);
        var styleJson = style.toJson();
        Object.keys(styleJson).forEach(function (key) {
            element.style[key] = styleJson[key];
        });
    }
    if (initDefaultStyle) {
        InitDefaultStyle();
    }
    return { "element": element, "child": child };
}
function Texto(text, style, id) {
    if (id === void 0) { id = null; }
    var element = document.createElement("p");
    element.innerHTML = text;
    element.style.padding = "0px";
    element.style.margin = "0px";
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
function Container(_a) {
    var child = _a.child, style = _a.style, id = _a.id;
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
function TextFormField(_a) {
    var controller = _a.controller, validator = _a.validator;
    var element = controller.input;
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    // element.style.flexGrow = `20`;
    //La variable validator es una function que se invoca desde TextFormField y esta retorna null si es valido
    // y retorna un String en caso contrario con un mensaje  indicando el error de validacion
    if (validator != null && validator != undefined) {
        //Creamos el evento personalizado (custom event)
        var event = new Event('build');
        // Escucha para el evento. Este evento solo se lanzara desde un FormGlobalKey
        element.addEventListener('validate', validate, false);
        // Disparar event.
        // elem.dispatchEvent(event);  
    }
    function validate(e) {
        var resultado = validator(element.value);
        console.log("input validate event: ", resultado, " value:", element.value);
        //Si el resultado es diferente de nulo entonces eso quiere decir que el input no es validor
        // asi que se lanzara una exception para el la function validate() del FormGlobalKey retorne false
        // indicando que el formulario no esta valido
        if (resultado != null) {
            e.detail("No valido");
            // throw {"mensaje" : "input validator error"};
        }
    }
    return { "element": element, "child": null };
}
function Form(_a) {
    var key = _a.key, child = _a.child;
    var element = key.form;
    return { "element": element, "child": child };
}
function RaisedButton(_a) {
    var child = _a.child, onPressed = _a.onPressed;
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    // var css = 'table td:hover{ background-color: rgba(0,0,0,0.8); filter:brightness(0.9); } ';
    var container = Container({ child: child, style: new TextStyle({ background: "#1a73e8", cursor: "pointer", padding: EdgetInsets.only({ left: 20, right: 20, bottom: 7, top: 7 }), borderRadius: BorderRadius.all(4) }) });
    if (onPressed)
        container.element.addEventListener("click", onPressed);
    container.element.classList.add("buttonHover");
    // container.element.style.background = "yellow";
    // container.element.style.padding = "5px 10px 5px 10px";
    // container.element.style.height = "10px";
    return container;
}
function SizedBox(_a) {
    var child = _a.child, width = _a.width, height = _a.height;
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    if (width)
        element.style.width = "" + width + fontSizeUnit;
    if (height)
        element.style.height = "" + height + fontSizeUnit;
    return { "element": element, "child": child };
}
function builderRecursivo(widget, isInit) {
    if (isInit === void 0) { isInit = false; }
    if ((widget.child == null || widget.child == undefined) && Array.isArray(widget) == false)
        return 0;
    if (Array.isArray(widget.child)) {
        // widget.element.appendChild()
        builderArrayRecursivo(widget);
    }
    else {
        widget.element.appendChild(widget.child.element);
        builderRecursivo(widget.child);
    }
}
function builderArrayRecursivo(widget) {
    // console.log("recursiveArray widget: ", widget);
    //Veriricamos de que el hijo sea un array para recorrerlo recursivamente
    if (!Array.isArray(widget.child))
        return;
    //Si el tamano del arreglo hijo es cero entonces ya no hay que recorrer nada asi que retornamos para salir de la funcion
    if (widget.child.length <= 0)
        return;
    //Eliminamos y optenemos el primer elemento(widget) del arreglo hijo, asi el tamano del arreglo se va reduciendo
    var hijo = widget.child.shift();
    //el atributo element es el elemento html o nodo que pertenece al widget hijo
    if (hijo.element == null) {
        return;
    }
    //Al widget el anadimos el widget hijo que obtuvimos y eliminamos del arreglo
    widget.element.appendChild(hijo.element);
    //Si el widget hijo tiene mas hijos entonces lo recorreremos recursivamente, para eso llamamos a la funcion builderRecursvio
    if (hijo.child != null)
        builderRecursivo(hijo);
    //Llamamos a esta misma funcion para seguir recorriendo de manera recursiva
    builderArrayRecursivo(widget);
}
var _formKey = new FormGlobalKey();
// var p = Init(
//     "container", 
//     Container(
//         {
//             child: Row({
//             mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//             children : [
//                 Form({
//                     key: _formKey,
//                     child: Row({
//                         children: [
//                             Flexible({
//                                 flex: 3,
//                                 child: TextFormField({controller: new TextEditingController(), validator: (data : string) : string => {
//                                     console.log("Text");
//                                     return "jean";
//                                 }})
//                             }),
//                             RaisedButton({child: Texto("Jean", new TextStyle({})), onPressed: () =>{
//                                 var v = _formKey.validate();
//                                 console.log("RaisedButton validate: ", v);
//                             }})
//                         ]
//                     })
//                 }),//Flexible
//                 Flexible({
//                     flex: 1,
//                     child: Row(
//                     {
//                         children : [
//                              Texto("jean", new TextStyle({fontSize: 15})),
//                              Texto("Contreras", new TextStyle({fontSize: 15})),
//                         ],
//                         mainAxisAlignment: MainAxisAlignment.spaceAround,
//                     }
//                  )}
//                  ),
//                 Flexible({
//                     flex: 3,
//                     child: Row(
//                         {
//                             children : [
//                                  Texto("jean", new TextStyle({fontSize: 15})),
//                                  Texto("Contreras", new TextStyle({fontSize: 15})),
//                             ],
//                             mainAxisAlignment: MainAxisAlignment.spaceAround,
//                         }
//                      )
//                 }),
//             ]
//         })
//         ,
//         style: new TextStyle({background : "brown", borderRadius : BorderRadius.all(3), width: 500})
//     }),
// );
var p = Init({
    initDefaultStyle: true,
    id: "container",
    style: new TextStyle({ fontFamily: "'Roboto', sans-serif" }),
    child: Form({
        key: _formKey,
        child: Row({
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
                Container({
                    child: TextFormField({
                        controller: new TextEditingController(),
                        validator: function (data) {
                            if (!data)
                                return "error";
                            return null;
                        }
                    }),
                }),
                SizedBox({ width: 20 }),
                RaisedButton({
                    child: Texto("Crear app", new TextStyle({ fontSize: 15, color: "#fafcfe", fontWeight: FontWeight.w500 })),
                    onPressed: function () {
                        console.log("onpressed: ", _formKey.validate());
                        if (_formKey.validate())
                            console.log("valido");
                        else
                            console.log("Invalido errorrr");
                    }
                })
            ]
        })
    })
});
builderRecursivo(p, true);
// _formKey.validate();
