import { TextStyle } from "./textstyle";

 export function Texto(text : string, style : TextStyle, id = null){
    var element = document.createElement("p");
    element.innerHTML = text;

    var styleJson = style.toJson();
    Object.keys(styleJson).forEach(key => {
        element.style[+key] = styleJson[+key];
    });
    
    return {"element" : element, "child" : null};
}