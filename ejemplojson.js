var ejemplo =[ {"id":"image","liga":"Esto es lo que se envía realmente"},{"id":"morty","liga":"Esto es lo que se envía realmente"}];
var a=0;
var b="image"
while(a<ejemplo.length){
    c=ejemplo[a].id;
    if(b==c){
        console.log(c +" es igual a "+b +" y " +ejemplo[a].liga)
        break
    }
    a++;
}


