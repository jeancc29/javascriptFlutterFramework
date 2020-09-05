import { FontWeight } from "./fontweight";

 export class TextAlign {
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

 export class TextStyle{
    fontSize : number;
    fontWeight: FontWeight;
    textAlign: TextAlign;
    fontStyle?: string;

    constructor(fontSize : number, fontWeight : FontWeight, textAlign : TextAlign, fontStyle? : string){
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontStyle = fontStyle;
    }

    toJson(){
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