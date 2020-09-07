
/********************* VARIABLES  ************************************/

let fontSizeUnit : string = "px";
let heightUnit : string = "vh";
let widthUnit : string = "vw";


/********************* FUNCTIONES  ************************************/

// function TextEditingController(){
//     let input = document.createElement("input");

// }

function ramdomString(length : number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


class TextEditingController{
    public input : any;
    public text : string;
    constructor(){
        this.text = "";
        this.input = document.createElement("input");
        this.input.addEventListener("input", () => {
            console.log("Dentro del controller");
            this.text = this.input.value;
        })
    }
}

class FormGlobalKey{
    public form : any;
    public text : string;
    private error : boolean = false;
    // private callBackError = function(error : string){
    //     this.
    //     throw "Error FormGlobalKey";
    // }
    constructor(){
        this.text = "";
        this.form = document.createElement("form");
    }

    validate(){
        try {
            //Obtenemos todos los inputs que estan dentro de este form 'FormGlobalKey'
            var inputs = this.form.getElementsByTagName("input");
            
            var valid = true;
            //Callback que se llamara desde los inputs en caso de no ser validor
            var callBackError = (function(errorMessage : string){
                valid = false;
                throw "Error FormGlobalKey";
            }).bind(valid);
            //Creamos el evento personalizado 'CustomEvent' y le pasamos el callbackError
            var event = new CustomEvent('validate', {"detail" : callBackError});
            // Disparar event.
            // elem.dispatchEvent(event);
            //Disparamos cada uno de los eventos de cada input
            for(var i=0; i < inputs.length; i++){
                inputs[i].dispatchEvent(event);
            }

            return valid;
        } catch (error) {
            console.log("Error FormGlobaKey validate");
            return false;
        }
    }
}




/********************* INTERFACES  ************************************/




/********************* STYLES  ************************************/
function InitDefaultStyle(){
    var buttonHover = 'div.buttonHover:hover{ background-color: rgba(0,0,0,0.8); filter:brightness(0.9); }';
    var defaultStyle = document.getElementById("defaultStyle");
    if(defaultStyle == null || defaultStyle == undefined){
        var style = document.createElement('style');
        style.setAttribute("id", "defaultStyle");
        style.appendChild(document.createTextNode(buttonHover));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

class FontWeight {
    values : string[] = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "bolder", "lighter", "normal", "bold"];
    index : number;
    private constructor(index : number){
        this.index = index - 1;
    }

    
    static w100 = new FontWeight(1);
    static w200 = new FontWeight(2);
    static w300 = new FontWeight(3);
    static w400 = new FontWeight(4);
    static w500 = new FontWeight(5);
    static w600 = new FontWeight(6);
    static w700 = new FontWeight(7);
    static w800 = new FontWeight(8);
    static w900 = new FontWeight(9);
    static bolder = new FontWeight(10);
    static lighter = new FontWeight(11);
    static normal = new FontWeight(12);
    static bold = new FontWeight(13);
    
    public toString = () : string => {
        return this.values[this.index];
    }
}

interface namedParametersBorderRadius {
    top? : number;
    right? : number;
    bottom? : number;
    left? : number;
}

class BorderRadius {
    top? : number;
    right? : number;
    bottom? : number;
    left? : number;

    private constructor({top, right, bottom, left} : namedParametersBorderRadius){
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }

    
    static all = (radius : number) => {
        return new BorderRadius({top : radius, right : radius, bottom : radius, left : radius})
    };
    static only = ({top, right, bottom, left} : namedParametersBorderRadius) => {
        return new BorderRadius({top, right, bottom, left});
    };
   
    
    public toString = () : string => {
        this.top = (this.top != null) ? this.top : 0;
        this.right = (this.right != null) ? this.right : 0;
        this.bottom = (this.bottom != null) ? this.bottom : 0;
        this.left = (this.left != null) ? this.left : 0;
        return `${this.top}${fontSizeUnit} ${this.right}${fontSizeUnit} ${this.bottom}${fontSizeUnit} ${this.left}${fontSizeUnit}`;
    }
}

interface namedParametersEdgeInsets {
    top? : number;
    right? : number;
    bottom? : number;
    left? : number;
}

class EdgetInsets {
    top? : number;
    right? : number;
    bottom? : number;
    left? : number;

    private constructor({top, right, bottom, left} : namedParametersEdgeInsets){
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }

    
    static all = (radius : number) => {
        return new EdgetInsets({top : radius, right : radius, bottom : radius, left : radius})
    };
    static only = ({top, right, bottom, left} : namedParametersBorderRadius) => {
        return new EdgetInsets({top, right, bottom, left});
    };
   
    
    public toString = () : string => {
        this.top = (this.top != null) ? this.top : 0;
        this.right = (this.right != null) ? this.right : 0;
        this.bottom = (this.bottom != null) ? this.bottom : 0;
        this.left = (this.left != null) ? this.left : 0;
        return `${this.top}${fontSizeUnit} ${this.right}${fontSizeUnit} ${this.bottom}${fontSizeUnit} ${this.left}${fontSizeUnit}`;
    }
}

class TextAlign {
    values : string[] = ["left", "right", "center", "justify"];
    index : number;
    private constructor(index : number){
        this.index = index - 1;
    }
    
    
    static left = new TextAlign(1);
    static right = new TextAlign(2);
    static center = new TextAlign(3);
    static justify = new TextAlign(4);

    
    public toString = () : string => {
        return this.values[this.index];
    }
}

class MainAxisAlignment {
    values : string[] = ["flex-start", "flex-end", "center", "space-evenly", "space-around", "space-between"];
    index : number;
    private constructor(index : number){
        this.index = index - 1;
    }
    
    
    static start = new MainAxisAlignment(1);
    static end = new MainAxisAlignment(2);
    static center = new MainAxisAlignment(3);
    static spaceEvenly = new MainAxisAlignment(4);
    static spaceAround = new MainAxisAlignment(5);
    static spaceBetween = new MainAxisAlignment(6);
    
    public toString = () : string => {
        return this.values[this.index];
    }
}

class CrossAxisAlignment {
    values : string[] = ["flex-start", "flex-end", "center",  "stretch"];
    index : number;
    private constructor(index : number){
        this.index = index - 1;
    }
    
    
    static start = new CrossAxisAlignment(1);
    static end = new CrossAxisAlignment(2);
    static center = new CrossAxisAlignment(3);
    static stretch = new CrossAxisAlignment(4);

    
    public toString = () : string => {
        return this.values[this.index];
    }
}

interface namedParametersTextStyle {
    fontSize? : number; 
    fontWeight? : FontWeight; 
    textAlign? : TextAlign; 
    fontStyle? : string;
    color? : string;
    background? : string;
    padding? : EdgetInsets;
    borderRadius? : BorderRadius;
    width? : number;
    height? : number;
    fontFamily? : string;
    cursor? : string;
}

class TextStyle{
    fontSize? : number;
    fontWeight?: FontWeight;
    textAlign?: TextAlign;
    fontStyle?: string;
    color? : string;
    background? : string;
    borderRadius? : BorderRadius;
    padding? : EdgetInsets;
    width? : number;
    height? : number;
    fontFamily? : string;
    cursor? : string;

    constructor({fontSize, fontWeight, textAlign, fontStyle, color, background, padding,borderRadius, width, height, fontFamily, cursor}: namedParametersTextStyle){
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

    toJson(){
        let jsonWithValuesNotNullToReturn : any = {}
        // Recorrer todas las propiedades de la case ignorando las que esta nulas 
        // para asi retornar los estilos que tengan valor
        for( var i in this){
            if (this.hasOwnProperty(i)) {
                if(this[i] != null && this[i] != undefined){
                    if(typeof this[i] == "object")
                        jsonWithValuesNotNullToReturn[i] = this[i].toString();
                    else{
                        let valor : any = "";
                        if(i == "fontSize" || i == "width" || i == "height"){
                            
                            valor += `${this[i]}${fontSizeUnit}`;
                            console.log(`${valor}`);
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
    }
}



class ContainerStyle{
    color : number;
    fontWeight: FontWeight;
    textAlign: TextAlign;
    fontStyle?: string;

    constructor(color : number, fontWeight : FontWeight, textAlign : TextAlign, fontStyle? : string){
        this.color = color;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontStyle = fontStyle;
    }

    public toJson(){
        let jsonWithValuesNotNullToReturn : any = {}
        // Recorrer todas las propiedades de la case ignorando las que esta nulas 
        // para asi retornar los estilos que tengan valor
        for( var i in this){
            if (this.hasOwnProperty(i)) {
                if(this[i] != null)
                    jsonWithValuesNotNullToReturn[i] = this[i];
                console.log(i + " -> " + this[i]);
            }
        }

        return jsonWithValuesNotNullToReturn;
    }
}


/********************* WIDGETS  ************************************/


interface namedParametersInit{
    id : string;
    child : any;
    style? : TextStyle;
    initDefaultStyle? : boolean;
}
function Init({id, child, style, initDefaultStyle = false} : namedParametersInit){
    var element : any = document.getElementById(id);
    if(style != null && style != undefined){
        console.log("Container style: ", style);
        var styleJson = style.toJson();
        Object.keys(styleJson).forEach(key => {
            element.style[key] = styleJson[key];
        });
    }

    if(initDefaultStyle){
        InitDefaultStyle();
    }

    return {"element" : element, "child" : child};
}

function Texto(text : string, style : TextStyle, id = null){
    var element = document.createElement("p");
    element.setAttribute("id", ramdomString(5));
    element.innerHTML = text;
    element.style.padding = "0px";
    element.style.margin = "0px";
    
    element.classList.add("cambios");
    element.addEventListener("cambios", (function(){
        console.log("Cambios en el dom text: ", text);
    }).bind(text))

    // Object.keys(style.toJson()).forEach(key => {
    //     element.style[key] = style[key];
    // });
    
    var styleJson = style.toJson();
    console.log("TExt style json: ", styleJson);
    Object.keys(styleJson).forEach(key => {
        element.style[key] = styleJson[key];
        console.log("TExt style foreach: ", styleJson[key]);
    });
    
    return {"element" : element, "child" : null};
}

interface namedParametersContainer {
    child : any;
    style? : TextStyle;
    id? : string;
}


function Container({child, style, id}: namedParametersContainer){
    var element = document.createElement("div");
    element.setAttribute("id", ramdomString(5));
    
    // Object.keys(style.toJson()).forEach(key => {
    //     element.style[key] = style[key];
    // });
    if(style != null && style != undefined){
        console.log("Container style: ", style);
        var styleJson = style.toJson();
        Object.keys(styleJson).forEach(key => {
            element.style[key] = styleJson[key];
        });
    }
    
    return {"element" : element, "child" : child};
}



interface namedParametersRow {
    children : any[];
    mainAxisAlignment? : MainAxisAlignment;
    crossAxisAlignment? : CrossAxisAlignment;
}


function Row({children, mainAxisAlignment, crossAxisAlignment} : namedParametersRow){
    var element = document.createElement("div");
    element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    
    element.style.display = "flex";
    element.style.flexDirection = "row";
    if(mainAxisAlignment != null && mainAxisAlignment != undefined)
        element.style.justifyContent = mainAxisAlignment.toString();
    if(crossAxisAlignment != null && crossAxisAlignment != undefined)
        element.style.alignItems = crossAxisAlignment.toString();

    return {"element" : element, "child" : children};
}

function Column({children, mainAxisAlignment, crossAxisAlignment} : namedParametersRow){
    var element = document.createElement("div");
    element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    
    element.style.display = "flex";
    element.style.flexDirection = "column";
    if(mainAxisAlignment != null && mainAxisAlignment != undefined)
        element.style.justifyContent = mainAxisAlignment.toString();
    if(crossAxisAlignment != null && crossAxisAlignment != undefined)
        element.style.alignItems = crossAxisAlignment.toString();

    return {"element" : element, "child" : children};
}

interface namedParametersFlexible {
    child : any;
    flex? : number;
}

function Flexible({child, flex} : namedParametersFlexible){
    var element = document.createElement("div");
    element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    
    
    if(flex != null && flex != undefined)
        element.style.flexGrow = `${flex}`;

    return {"element" : element, "child" : child};
}

interface namedParametersExpanded {
    child : any;
}

function Expanded({child} : namedParametersExpanded){
    var element = document.createElement("div");
    element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    element.style.flexGrow = `20`;

    return {"element" : element, "child" : child};
}

interface namedParametersTextFormField {
    controller : TextEditingController;
    validator? : any
}

function TextFormField({controller, validator} : namedParametersTextFormField){
    var element = controller.input;
    element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    // element.style.flexGrow = `20`;

    //La variable validator es una function que se invoca desde TextFormField y esta retorna null si es valido
    // y retorna un String en caso contrario con un mensaje  indicando el error de validacion
    if(validator != null && validator != undefined){
        //Creamos el evento personalizado (custom event)
        // var event = new Event('build');
        // Escucha para el evento. Este evento solo se lanzara desde un FormGlobalKey
        element.addEventListener('validate', validate, false);
        // Disparar event.
        // elem.dispatchEvent(event);  
    }

    function validate(e : any){
        
        var resultado = validator(element.value);
        console.log("input validate event: ", resultado, " value:", element.value);
        //Si el resultado es diferente de nulo entonces eso quiere decir que el input no es validor
        // asi que se lanzara una exception para el la function validate() del FormGlobalKey retorne false
        // indicando que el formulario no esta valido
        if(resultado != null){
            e.detail("No valido");
            // throw {"mensaje" : "input validator error"};
        }
    }

    return {"element" : element, "child" : null};
}

interface namedParametersBuilder{
    id: string;
    builder: any;
}

function Builder({id, builder} : namedParametersBuilder){
    var element = document.getElementById(id);
    if(element == null){
        element = document.createElement("div");
        element.setAttribute("id", "container");
    }

    element.innerHTML = "";
    var setState =( function(callback : any){
        element?.classList.add("setState");
        // while (element.firstChild) {
            // element.removeChild(element.firstChild);
            var c = document.getElementsByClassName("cambios");
            var event = new Event("cambios");
            for(var i = 0; i < c.length; i++){
                console.log("dentro setState hijos: ", c[i]);
                c[i].dispatchEvent(event);
            }
            
        // }
        var elements = builder(id, setState);
        // builderRecursivo(elements, true);
    }).bind(element);
    var elements = builder(id, setState);
    builderRecursivo(elements, true);
}

interface namedParametersForm {
    key : FormGlobalKey;
    child : any
}

function Form({key, child} : namedParametersForm){
    var element = key.form;
    element.setAttribute("id", ramdomString(5));

    return {"element" : element, "child" : child};
}

interface namedParametersRaisedButton {
    onPressed : any;
    child : any
}

function RaisedButton({child, onPressed} : namedParametersRaisedButton){
    // var element = document.createElement("div");
    // element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    // var css = 'table td:hover{ background-color: rgba(0,0,0,0.8); filter:brightness(0.9); } ';
    
    var container = Container({child: child, style: new TextStyle({background: "#1a73e8", cursor: "pointer",padding: EdgetInsets.only({left: 20, right: 20, bottom: 7, top: 7}), borderRadius: BorderRadius.all(4)})});
    if(onPressed)
        container.element.addEventListener("click", onPressed);

    container.element.classList.add("buttonHover")

    // container.element.style.background = "yellow";
    // container.element.style.padding = "5px 10px 5px 10px";
    // container.element.style.height = "10px";
    return container;
}

interface namedParametersSizedBox {
    child? : any;
    width? : number;
    height? : number;
}

function SizedBox({child, width, height} : namedParametersSizedBox){
    var element = document.createElement("div");
    element.setAttribute("id", ramdomString(5));
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    
    
    if(width)
        element.style.width = `${width}${fontSizeUnit}`;
    if(height)
        element.style.height = `${height}${fontSizeUnit}`;

    return {"element" : element, "child" : child};
}

function builderRecursivo(widget : any, isInit = false){
    if((widget.child == null || widget.child == undefined ) && Array.isArray(widget) == false)
        return 0;

    if(Array.isArray(widget.child)){
        // widget.element.appendChild()
        builderArrayRecursivo(widget);
    }else{
        widget.element.appendChild(widget.child.element);
        builderRecursivo(widget.child);
    }
    
}

function builderArrayRecursivo(widget : any){
    // console.log("recursiveArray widget: ", widget);
    
    //Veriricamos de que el hijo sea un array para recorrerlo recursivamente
    if(!Array.isArray(widget.child))
        return;
    
    //Si el tamano del arreglo hijo es cero entonces ya no hay que recorrer nada asi que retornamos para salir de la funcion
    if(widget.child.length <= 0)
        return;

    //Eliminamos y optenemos el primer elemento(widget) del arreglo hijo, asi el tamano del arreglo se va reduciendo
    var hijo = widget.child.shift();

    //el atributo element es el elemento html o nodo que pertenece al widget hijo
    if(hijo.element == null){
        return;
    }

    //Al widget el anadimos el widget hijo que obtuvimos y eliminamos del arreglo
    widget.element.appendChild(hijo.element);

    //Si el widget hijo tiene mas hijos entonces lo recorreremos recursivamente, para eso llamamos a la funcion builderRecursvio
    if(hijo.child != null)
        builderRecursivo(hijo);

    //Llamamos a esta misma funcion para seguir recorriendo de manera recursiva
    builderArrayRecursivo(widget);
}



let _formKey = new FormGlobalKey();


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

interface namedParametersBuild{
    id: string;
}
declare var flutter : object;

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
let _mensaje: string = "hola";
Builder({
    id: "container",
    builder:(id : string, setState : any) => {
        
        return Init({
            id: id,
            child: RaisedButton({
                child: Texto(_mensaje, new TextStyle({})),
                onPressed: () => {
                    setState(() => {
                        _mensaje = "Cambieeee";
                    })
                }
            })
        });
    }
})

