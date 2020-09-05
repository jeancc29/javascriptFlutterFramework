BorderStyles = {solid: "solid", dashed: "dashed"};
Units = {px: "px", dp: "dp"};
function Border(width, style = BorderStyles.solid, color){
    console.log("Border: ", width +" " + style + " " + color);
    return width +" " + style + " " + color;
}

