function Selector(selector,styles){
    var elem=document.querySelector(selector);
    for(var prop in styles){
        for(var globalProp in elem.style){
            if(prop==globalProp){
                elem.style[prop]=styles[prop]
            }
        }
    }
    return elem;
}
Selector(".shape",{
    border:"5px solid darkblue",
    height:"300px",
    width:"500px",
    background:"yellow",
    color:"darkblue"
})