function FncInicioPagIndex(){
    var docente= d3.select('#nombreDocente');
    var materia= d3.select('#materia');
    materia.text(_nombreCurso);
    materia.classed('header', true);
    docente.text('Docente : ' + _docente);
    docente.classed('light',true);
}