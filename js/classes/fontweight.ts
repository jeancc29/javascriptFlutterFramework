 export class FontWeight {
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