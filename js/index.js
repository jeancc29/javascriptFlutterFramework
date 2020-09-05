function Text(text, style = {}, id = null){
    var element = document.createElement("p");
    element.innerHTML = text;
    // p.style["fontSize"] = "24";

    Object.keys(style).forEach(key => {
        element.style[key] = style[key];
    });
    
    // if(id != null){
    //     var parent = document.getElementById(id);
    //     parent.appendChild(element);
    // }
    
    return {"element" : element, "child" : null};
}

function Container(child, style = {}, id = null){
    var element = document.createElement("div");
    Object.keys(style).forEach(key => {
        element.style[key] = style[key];
    });
    return {"element" : element, "child" : child};
}

function Row(children, style = {}, id = null){
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    Object.keys(style).forEach(key => {
        element.style[key] = style[key];
    });
    element.style.display = "flex";
    element.style.flexDirection = "row";
    return {"element" : element, "child" : children};
}

function Column(children, style = {}, id = null){
    var element = document.createElement("div");
    // var defaultStyle = {"display" : "flex", "flex-direction" : "row"};
    Object.keys(style).forEach(key => {
        element.style[key] = style[key];
    });
    element.style.display = "flex";
    element.style.flexDirection = "column";
    return {"element" : element, "child" : children};
}

function Init(id, child){
    var element = document.getElementById(id);
    return {"element" : element, "child" : child};
}

function recorrerArreglosRecursivamente (object, isInit = false, parent = null) {
    // // Sentinel value.  Recursion stops on empty array.
    if (object == undefined || object == null) {
        return 0;
    }

    // if(typeof object.element == "object")


    // // The shift() method removes the first element from an array 
    // // and returns that element. This method changes the length of the array.
    // var elemento = object["element"];
    // var hijo = object["child"];
    // var hijos = object["children"];

    // if(isInit){
    //     if(hijo){
    //         elemento.appendChild(hijo);
    //         recorrerArreglosRecursivamente(hijo);
    //     }else{
    //         recorrerArreglosRecursivamente(hijos);
    //     }
    // }
    
    // // console.log("value: ", value);
    // // console.log("value type: ", typeof value);
    // // console.log("value length: ", value.length);
    // if(hijo.length != undefined){
    //     console.log("hijos length: ", hijo.length);
    //     arr = hijo;
    // }else{
    //     //Si es Widget init entonces no se insertara, simpletemente se asignara como padre
    //     if(isInit){
    //         parent = hijo;
    //     }
    //     else{
    //         console.log("Dentro insertar parent: ", parent);
            
    //         if(parent != null){
    //             parent.appendChild(hijo);
    //             parent = hijo;
    //         }
    //     }
    // }

    // `value % 2 === 0` tests if the number is even or odd
    // If it's even we add one to the result of counting the remainder of 
    // the array.  If it's odd, we add zero to it.
    // return ((value % 2 === 0) ? 1 : 0) + countEvens(arr);
    return recorrerArreglosRecursivamente(arr, false, parent);
}

function recorrerArreglosRecursivamenteViejo (arr, isInit = false, parent = null) {
    // Sentinel value.  Recursion stops on empty array.
    if (arr.length < 1) {
        return 0;
    }
    // The shift() method removes the first element from an array 
    // and returns that element. This method changes the length of the array.
    var hijo = arr.shift();
    
    // console.log("value: ", value);
    // console.log("value type: ", typeof value);
    // console.log("value length: ", value.length);
    if(hijo.length != undefined){
        arr = hijo;
    }else{
        //Si es Widget init entonces no se insertara, simpletemente se asignara como padre
        if(isInit){
            parent = hijo;
        }
        else{
            console.log("Dentro insertar parent: ", parent);
            
            if(parent != null){
                parent.appendChild(hijo);
                parent = hijo;
            }
        }
    }

    // `value % 2 === 0` tests if the number is even or odd
    // If it's even we add one to the result of counting the remainder of 
    // the array.  If it's odd, we add zero to it.
    // return ((value % 2 === 0) ? 1 : 0) + countEvens(arr);
    return recorrerArreglosRecursivamente(arr, false, parent);
}