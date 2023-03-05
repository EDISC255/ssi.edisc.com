agregarComponente("#header", "menu");
agregarComponente("#screen","inicio");
    
function agregarComponente(padre, hijo){
    $.ajax({
        type: "get",
        url: "../html/"+hijo+".html",
        success: function (respuesta) {
            //console.log(response)
            $(padre).html(respuesta)
        }
    });
}
