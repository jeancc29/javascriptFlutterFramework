
let fontSizeUnit : string = "px";
let heightUnit : string = "vh";
let widthUnit : string = "vw";


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
    fontWeight? : 
    FontWeight; 
    textAlign? : TextAlign; 
    fontStyle? : string;
    color? : string;
    background? : string;
    borderRadius? : BorderRadius;
    width? : number;
    height? : number;
}

class TextStyle{
    fontSize? : number;
    fontWeight?: FontWeight;
    textAlign?: TextAlign;
    fontStyle?: string;
    color? : string;
    background? : string;
    borderRadius? : BorderRadius;
    width? : number;
    height? : number;

    constructor({fontSize, fontWeight, textAlign, fontStyle, color, background, borderRadius, width, height}: namedParametersTextStyle){
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


function Init(id : string, child : any){
    var element = document.getElementById(id);
    return {"element" : element, "child" : child};
}

function Texto(text : string, style : TextStyle, id = null){
    var element = document.createElement("p");
    element.innerHTML = text;

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

function Container(child : any, style : TextStyle, id = null){
    var element = document.createElement("div");
    
    
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
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    element.style.flexGrow = `20`;

    return {"element" : element, "child" : child};
}

function builderRecursivo(valor : any, isInit = false){
    if((valor.child == null || valor.child == undefined ) && Array.isArray(valor) == false)
        return 0;

    if(Array.isArray(valor.child)){
        // valor.element.appendChild()
        builderArrayRecursivo(valor);
    }else{
        valor.element.appendChild(valor.child.element);
        builderRecursivo(valor.child);
    }
    
}

function builderArrayRecursivo(valor : any){
    console.log("recursiveArray valor: ", valor);
    
    if(!Array.isArray(valor.child))
        return;
    
    if(valor.child.length <= 0)
        return;

    var hijo = valor.child.shift();
    console.log("builderArrayRecursivo: ", hijo);
    if(hijo.element == null){
        console.log("builderArrayRecursivo hijo.element == null: ", hijo);
        
        return;
    }
    // console.log("builderArrayRecursivo hijo.element == null: ", hijo);
    valor.element.appendChild(hijo.element);
    if(hijo.child != null)
        builderRecursivo(hijo);

    builderArrayRecursivo(valor);
}





var p = Init(
    "container", 
    Container(
        Row({
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children : [
                Flexible({
                    flex: 1,
                    child: Row(
                    {
                        children : [
                             Texto("jean", new TextStyle({fontSize: 15})),
                             Texto("Contreras", new TextStyle({fontSize: 15})),
                        ],
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                    }
                 )}
                 ),
                Flexible({
                    flex: 3,
                    child: Row(
                        {
                            children : [
                                 Texto("jean", new TextStyle({fontSize: 15})),
                                 Texto("Contreras", new TextStyle({fontSize: 15})),
                            ],
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                        }
                     )
                }),
            ]
        })
        ,
        new TextStyle({background : "red", borderRadius : BorderRadius.all(3), width: 500})
    ),
);

builderRecursivo(p, true);


