$.ajax({
    type: "get",
    url: "../html/menu.html",
    success: function (respuesta) {
        //console.log(response)
        $('#header').html(respuesta)
    }
});



