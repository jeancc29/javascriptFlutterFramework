"use strict";
/********************* VARIABLES  ************************************/
var fontSizeUnit = "px";
var heightUnit = "vh";
var widthUnit = "vw";
/********************* FUNCTIONES  ************************************/
// function TextEditingController(){
//     let input = document.createElement("input");
// }
function ramdomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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
                            // console.log(`${valor}`);
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
// class Init{
//     id: string;
//     child: any;
//     style?: TextStyle;
//     initDefaultStyle?: boolean; 
//     readonly runType = "Init"; 
//     constructor({id, child, style, initDefaultStyle = false} : namedParametersInit){
//         this.id = id;
//         this.child = child;
//         this.style = style;
//         this.initDefaultStyle = initDefaultStyle;
//     }
//     toJson(){
//         var element : any = document.getElementById(this.id);
//         if(this.style != null && this.style != undefined){
//             console.log("Container style: ", this.style);
//             var styleJson = this.style.toJson();
//             Object.keys(styleJson).forEach(key => {
//                 element.style[key] = styleJson[key];
//             });
//         }
//         if(this.initDefaultStyle){
//             InitDefaultStyle();
//         }
//         return {"element" : element, "child" : this.child};
//     }
// }
function Texto(text, style, id) {
    if (id === void 0) { id = null; }
    var element = document.createElement("p");
    element.setAttribute("id", 'Texto-' + ramdomString(7));
    element.innerHTML = text;
    element.style.padding = "0px";
    element.style.margin = "0px";
    element.classList.add("cambios");
    element.addEventListener("cambios", (function () {
        console.log("Cambios en el dom text: ", text);
    }).bind(text));
    // Object.keys(style.toJson()).forEach(key => {
    //     element.style[key] = style[key];
    // });
    var styleJson = style.toJson();
    // console.log("TExt style json: ", styleJson);
    Object.keys(styleJson).forEach(function (key) {
        element.style[key] = styleJson[key];
        // console.log("TExt style foreach: ", styleJson[key]);
    });
    return { "element": element, "style": styleJson, "type": "Texto", "child": null };
}
function Container(_a) {
    var child = _a.child, style = _a.style, id = _a.id;
    var element = document.createElement("div");
    if (id == null || id == undefined)
        element.setAttribute("id", 'Container-' + ramdomString(7));
    else
        element.setAttribute("id", id + "-" + ramdomString(7));
    // Object.keys(style.toJson()).forEach(key => {
    //     element.style[key] = style[key];
    // });
    var styleJson = {};
    if (style != null && style != undefined) {
        console.log("Container style: ", style);
        styleJson = style.toJson();
        Object.keys(styleJson).forEach(function (key) {
            element.style[key] = styleJson[key];
        });
    }
    return { "element": element, "style": styleJson, "type": "Container", "child": child };
}
function Row(_a) {
    var children = _a.children, mainAxisAlignment = _a.mainAxisAlignment, crossAxisAlignment = _a.crossAxisAlignment;
    var element = document.createElement("div");
    element.setAttribute("id", "Row-" + ramdomString(7));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    var styleJson = {};
    element.style.display = "flex";
    element.style.flexDirection = "row";
    if (mainAxisAlignment != null && mainAxisAlignment != undefined) {
        element.style.justifyContent = mainAxisAlignment.toString();
        styleJson.justifyContent = mainAxisAlignment.toString();
    }
    if (crossAxisAlignment != null && crossAxisAlignment != undefined) {
        element.style.alignItems = crossAxisAlignment.toString();
        styleJson.alignItems = crossAxisAlignment.toString();
    }
    return { "element": element, "style": styleJson, "type": "Row", "child": children };
}
function Column(_a) {
    var children = _a.children, mainAxisAlignment = _a.mainAxisAlignment, crossAxisAlignment = _a.crossAxisAlignment;
    var element = document.createElement("div");
    element.setAttribute("id", "Column-" + ramdomString(7));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    var styleJson = {};
    element.style.display = "flex";
    element.style.flexDirection = "column";
    if (mainAxisAlignment != null && mainAxisAlignment != undefined) {
        element.style.justifyContent = mainAxisAlignment.toString();
        styleJson.justifyContent = mainAxisAlignment.toString();
    }
    if (crossAxisAlignment != null && crossAxisAlignment != undefined) {
        element.style.alignItems = crossAxisAlignment.toString();
        styleJson.alignItems = crossAxisAlignment.toString();
    }
    return { "element": element, "style": styleJson, "type": "Column", "child": children };
}
function Flexible(_a) {
    var child = _a.child, flex = _a.flex;
    var element = document.createElement("div");
    element.setAttribute("id", "Flexible-" + ramdomString(7));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    var styleJson = {};
    if (flex != null && flex != undefined) {
        element.style.flexGrow = "" + flex;
        styleJson.flexGrow = "" + flex;
    }
    return { "element": element, "style": styleJson, "type": "Flexible", "child": child };
}
function Expanded(_a) {
    var child = _a.child;
    var element = document.createElement("div");
    element.setAttribute("id", "Expanded-" + ramdomString(7));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    element.style.flexGrow = "20";
    return { "element": element, "style": {}, "type": "Expanded", "child": child };
}
function TextFormField(_a) {
    var controller = _a.controller, validator = _a.validator;
    var element = controller.input;
    element.setAttribute("id", "TextFormField-" + ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    // element.style.flexGrow = `20`;
    //La variable validator es una function que se invoca desde TextFormField y esta retorna null si es valido
    // y retorna un String en caso contrario con un mensaje  indicando el error de validacion
    if (validator != null && validator != undefined) {
        //Creamos el evento personalizado (custom event)
        // var event = new Event('build');
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
    return { "element": element, "style": {}, "type": "TextFormField", "child": null };
}
function Builder(_a) {
    var id = _a.id, builder = _a.builder;
    var element = document.getElementById(id);
    if (element == null) {
        element = document.createElement("div");
        element.setAttribute("id", "container");
    }
    element.innerHTML = "";
    var setState = (function () {
        // callback;
        // console.log("setState: ", callback);
        element === null || element === void 0 ? void 0 : element.classList.add("setState");
        // while (element.firstChild) {
        // element.removeChild(element.firstChild);
        // var c = document.getElementsByClassName("cambios");
        // var event = new Event("cambios");
        // for(var i = 0; i < c.length; i++){
        //     console.log("dentro setState hijos: ", c[i]);
        //     c[i].dispatchEvent(event);
        // }
        // }
        console.log("Resultadosssssssss id: ", element === null || element === void 0 ? void 0 : element.id);
        var elements = builder(element === null || element === void 0 ? void 0 : element.id, setState);
        console.log("Resultadooooooooooooos: ", elements);
        builderRecursivo(elements, true);
    }).bind(element);
    var elements = builder(id, setState);
    builderRecursivo(elements, true);
}
function Form(_a) {
    var key = _a.key, child = _a.child;
    var element = key.form;
    element.setAttribute("id", ramdomString(5));
    return { "element": element, "child": child };
}
function RaisedButton(_a) {
    // var element = document.createElement("div");
    // element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    // var css = 'table td:hover{ background-color: rgba(0,0,0,0.8); filter:brightness(0.9); } ';
    var child = _a.child, onPressed = _a.onPressed, _b = _a.color, color = _b === void 0 ? "#1a73e8" : _b;
    var container = Container({ id: "RaisedButton", child: child, style: new TextStyle({ background: color, cursor: "pointer", padding: EdgetInsets.only({ left: 20, right: 20, bottom: 7, top: 7 }), borderRadius: BorderRadius.all(4) }) });
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
    element.setAttribute("id", 'SizedBox-' + ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    if (width)
        element.style.width = "" + width + fontSizeUnit;
    if (height)
        element.style.height = "" + height + fontSizeUnit;
    return { "element": element, "child": child };
}
function builderRecursivo(widget, isInit, widgetsYaCreados) {
    var _a;
    if (isInit === void 0) { isInit = false; }
    if (widgetsYaCreados === void 0) { widgetsYaCreados = null; }
    if ((widget.child == null || widget.child == undefined) && Array.isArray(widget) == false)
        return 0;
    var hijosDelElementoInit;
    if (isInit)
        hijosDelElementoInit = (_a = document.getElementById(widget.element.id)) === null || _a === void 0 ? void 0 : _a.childNodes;
    if (hijosDelElementoInit != null)
        if (hijosDelElementoInit.length > 0)
            widgetsYaCreados = hijosDelElementoInit;
    if (widgetsYaCreados == null || widgetsYaCreados == undefined) {
        if (Array.isArray(widget.child)) {
            // widget.element.appendChild()
            builderArrayRecursivo(widget);
        }
        else {
            widget.element.appendChild(widget.child.element);
            builderRecursivo(widget.child);
        }
    }
    else {
        if (Array.isArray(widget.child)) {
            // widget.element.appendChild()
            console.log("Dentro array: ", widgetsYaCreados);
            var array = Array.from(widgetsYaCreados);
            builderArrayRecursivo(widget, array);
        }
        else {
            // widgetsYaCreados.shift();
            // console.log("builderRecursivo widgetsYaCreados: ", widgetsYaCreados);
            // console.log("builderRecursivo widgets a crear: ", widget);
            console.log("Dentrooooooooooooooooooooooooooooooooooo: ", widgetsYaCreados);
            console.log("Dentroooooooooooooooooooooooooo a crearrr: ", widget.child.element);
            if (widgetsYaCreados.length == 1) {
                var widgetCreado = widgetsYaCreados[0];
                if (widget.child.type == widgetCreado.id.split("-")[0] && widget.child.element.nodeName == widgetCreado.nodeName && widget.child.element.nodeType == widgetCreado.nodeType) {
                    updateStyleOfExistenteWidget(widget, widgetCreado);
                    updateTextOfExistenteWidget(widget, widgetCreado);
                    widget.child.element = widgetCreado;
                    builderRecursivo(widget.child, false, widgetCreado.childNodes);
                }
                else {
                    //Tomamos el nodo padre
                    var parent = widgetCreado.parentNode;
                    //Creamos el nuevo nodo
                    widget.element.appendChild(widget.child.element);
                    //Eliminamos el viejo nodo
                    parent.removeChild(widgetCreado);
                    builderRecursivo(widget.child, false, widgetCreado.childNodes);
                }
            }
            else {
                console.log("Son diferente");
                // return;
                widget.element.appendChild(widget.child.element);
                builderRecursivo(widget.child);
            }
        }
    }
}
function builderArrayRecursivo(widget, widgetsYaCreados) {
    // console.log("recursiveArray widget: ", widget);
    if (widgetsYaCreados == null || widgetsYaCreados == undefined) {
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
    else {
        //Veriricamos de que el hijo sea un array para recorrerlo recursivamente
        if (!Array.isArray(widget.child))
            return;
        //Si el tamano del arreglo hijo es cero entonces ya no hay que recorrer nada asi que retornamos para salir de la funcion
        if (widget.child.length <= 0)
            return;
        //Eliminamos y optenemos el primer elemento(widget) del arreglo hijo, asi el tamano del arreglo se va reduciendo
        var hijo = widget.child.shift();
        var widgetCreado = widgetsYaCreados.shift();
        //el atributo element es el elemento html o nodo que pertenece al widget hijo
        if (hijo.element == null) {
            return;
        }
        console.log("builderArrayRecursivo antes de error: ", hijo.element.innerHTML);
        //Al widget le anadimos el widget hijo que obtuvimos y eliminamos del arreglo
        if (widgetCreado != null && widgetCreado != null) {
            if (hijo.type == widgetCreado.id.split("-")[0] && hijo.element.nodeName == widgetCreado.nodeName && hijo.element.nodeType == widgetCreado.nodeType) {
                updateStyleOfExistenteWidget(hijo, widgetCreado);
                updateTextOfExistenteWidget(hijo, widgetCreado);
                // builderRecursivo(widget.child, false, widgetCreado.childNodes);
            }
            else {
                //Tomamos el nodo padre
                var parent = widgetCreado.parentNode;
                //Creamos el nuevo nodo
                widget.element.appendChild(hijo.element);
                //Eliminamos el viejo nodo
                parent.removeChild(widgetCreado);
                // builderRecursivo(widget.child, false, widgetCreado.childNodes);
            }
        }
        else {
            widget.element.appendChild(hijo.element);
        }
        // widget.element.appendChild(hijo.element);
        // console.log("builderArrayRecursivo: ", hijo);
        //Si el widget hijo tiene mas hijos entonces lo recorreremos recursivamente, para eso llamamos a la funcion builderRecursvio
        if (hijo.child != null)
            builderRecursivo(hijo, false, widgetCreado);
        // console.log("builderArrayRecursivo despues: ", hijo);
        //Llamamos a esta misma funcion para seguir recorriendo de manera recursiva
        builderArrayRecursivo(widget, widgetsYaCreados);
    }
}
function updateStyleOfExistenteWidget(nuevoWidget, widgetViejoOExistente) {
    console.log("updateStyleOfExistenteWidget nuevoWidget: ", nuevoWidget);
    if (nuevoWidget.child == null || nuevoWidget.child == undefined)
        return;
    if (nuevoWidget.child.style == null || nuevoWidget.child.style == undefined)
        return;
    Object.keys(nuevoWidget.child.style).forEach(function (key) {
        widgetViejoOExistente.style[key] = nuevoWidget.child.style[key];
    });
}
function updateTextOfExistenteWidget(nuevoWidget, widgetViejoOExistente) {
    if (nuevoWidget.child != null && nuevoWidget.child != undefined) {
        if (nuevoWidget.child.element != null && nuevoWidget.child.element != undefined)
            if (nuevoWidget.child.element.id.split("-") == "Texto")
                widgetViejoOExistente.innerHTML = nuevoWidget.child.element.innerHTML;
    }
    if (nuevoWidget.element != null && nuevoWidget.element != undefined) {
        if (nuevoWidget.element.id.split("-")[0] == "Texto")
            widgetViejoOExistente.innerHTML = nuevoWidget.element.innerHTML;
    }
}
var _formKey = new FormGlobalKey();
// Builder({
//     id: "container",
//     builder: (element: any, setState: any) => {
//         let _mensaje = "Hola soy jean carlos";
//         return Init(
//             {
//                 initDefaultStyle: true,
//                 id: "container",
//                 style : new TextStyle({fontFamily: "'Roboto', sans-serif"}),
//                 child: Form({
//                     key: _formKey,
//                     child: Row({
//                         crossAxisAlignment: CrossAxisAlignment.center,
//                         children: [
//                             Container({
//                                 child: Column({
//                                     children: [
//                                         Texto(`${flutter}`, new TextStyle({fontSize: 25})),
//                                         TextFormField({
//                                             controller: new TextEditingController(),
//                                             validator: (data : string) => {
//                                                 if(!data)
//                                                     return "error";
//                                                 return null;
//                                             }
//                                         })
//                                     ]
//                                 }),
//                             }),
//                             SizedBox({width: 20}),
//                             RaisedButton({
//                                 child: Texto("Crear app", new TextStyle({fontSize: 15, color: "#fafcfe", fontWeight: FontWeight.w500})),
//                                 onPressed: () => {
//                                     console.log("onpressed: ", _formKey.validate());
//                                     setState(() => _mensaje = "Cambie");
//                                     if( _formKey.validate())
//                                         console.log("valido");
//                                     else
//                                         console.log("Invalido errorrr");
//                                 }
//                             })
//                         ]
//                     })
//                 })}
//         );
//     }
//     }
// );
// _formKey.validate();
var _mensaje = "hola";
var _mostrarColumna = false;
var color = "green";
Builder({
    id: "container",
    builder: function (id, setState) {
        return Init({
            id: id,
            child: (_mostrarColumna)
                ?
                    Column({
                        children: [
                            Texto("Fila1 - " + _mensaje, new TextStyle({})),
                            Texto("Fila2", new TextStyle({ fontSize: 20 })),
                            Texto("Fila3", new TextStyle({ fontSize: 25 })),
                            Texto("Fila4", new TextStyle({ fontSize: 30 })),
                            Column({
                                children: [
                                    Texto("Fila5", new TextStyle({ fontSize: 35 })),
                                    Row({
                                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                        children: [
                                            Column({
                                                children: [
                                                    Row({
                                                        crossAxisAlignment: CrossAxisAlignment.center,
                                                        children: [
                                                            Texto("Fila5.1", new TextStyle({ fontSize: 35 })),
                                                            Column({
                                                                children: [
                                                                    Row({
                                                                        children: [
                                                                            Texto("Fila5.1.1", new TextStyle({ fontSize: 20 })),
                                                                            RaisedButton({
                                                                                color: color,
                                                                                child: Texto("click", new TextStyle({})),
                                                                                onPressed: function () {
                                                                                    color = "red";
                                                                                    setState();
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                    Texto("Fila5.1.2", new TextStyle({ fontSize: 20 })),
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            Texto("Fila5.2", new TextStyle({ fontSize: 35 })),
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                :
                    Column({
                        children: [
                            Texto("Fila1 - " + _mensaje, new TextStyle({})),
                            RaisedButton({
                                child: Texto(_mensaje, new TextStyle({})),
                                onPressed: function () {
                                    // console.log("onpressed mensaje: ", _mensaje);
                                    _mensaje = "Cambieeee";
                                    _mostrarColumna = true;
                                    setState();
                                    // console.log("onpressed mensaje: ", _mensaje);
                                }
                            })
                        ]
                    })
        });
    }
});
// var c = new Init({
//     id: "container", 
//     child: new Container({
//         child: new Texto({text: "jean"})
//     })
// });
// for(var cc in c){
//     console.log("print widget ccccc: ", cc);
// }
// console.log("print widget c: ", c.child);
