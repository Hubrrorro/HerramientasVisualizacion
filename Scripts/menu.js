function FncCreaElementoMenuURL(controlpadre, nombre, url)
{
    controlpadre.append("li")
    .classed("bold",true)
    .append("a")
        .text(nombre)
        .attr('href',url)
        .classed('waves-effect waves-teal titulo',true);
}
function FncCreaElementoTexto(controlpadre,nombre,clase){
    controlpadre.append("li")
    .append("center")
        .append("label")
            .text(nombre)
            .classed(clase,true);
}
function FncCreaElementoConHijos(controlpadre,nombre,hijos){
    var limenu1= controlpadre.append("li")
    .classed("no-padding",true)
    .append("ul")
        .classed('collapsible collapsible-accordion',true)
        .append("li")
        .classed("bold",true);
        limenu1.append("a")
            .classed("collapsible-header waves-effect waves-teal titulo",true)
            .text(nombre);
        var submenu= limenu1.append("div")
            .classed("collapsible-body",true)
            .append("ul");
        $(hijos).each(function(index, value){
            FncCreaElementoMenuURL(submenu, value.nombre, value.url)
        });

}
function FncCreaMenu(control)
{
    var menu = d3.select('#' + control);
    var hijos = [];
    var hijoMenu = new Object();
    hijoMenu.nombre = "D3 (I)";
    hijoMenu.url = 'Grafica1.html';
    hijos.push(hijoMenu);
    var hijoMenu2 = new Object();
    hijoMenu2.nombre = "D3 (II)";
    hijoMenu2.url = 'Grafica2.html';
    hijos.push(hijoMenu2);
    var hijoMenu3 = new Object();
    hijoMenu3.nombre = "D3 (III)";
    hijoMenu3.url = 'Grafica3.html';
    hijos.push(hijoMenu3);
    FncCreaElementoTexto(menu,_nombreCurso,'titulo');
    menu.append("li")
        .classed("logo",true)
        .classed("imgenCentro",true)
        .append("img")
            .classed("circle responsive-img materialboxed", true)
            .attr('src','Images/imgpersonal.jpg');
    FncCreaElementoTexto(menu,_alumno,'lobster');
    FncCreaElementoMenuURL(menu,"Inicio",'Index.html');
    FncCreaElementoMenuURL(menu,"Referencias a librerías",'Referencias.html');
    FncCreaElementoConHijos(menu,"Gráfica",hijos);

}